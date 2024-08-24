from dotenv import load_dotenv
load_dotenv()
import os
from openai import OpenAI
from pinecone import Pinecone, ServerlessSpec
import json

INDEX_NAME = ""
DIMENSIONS = 0
pc = Pinecone(api_key=os.getenv("PINECONE_API_KEY"))
pc.create_index(
    name=INDEX_NAME, dimension=DIMENSIONS, metric="cosine", spec=ServerlessSpec(cloud="aws", region="us-east-1")
)

# Do this part in Javascript
data = json.load(open("reviews.json", "r"))

processed_data = []
client = OpenAI()

for review in data['reviews']:
    response = client.embeddings.create(
        input=review['review'],
        model="text-embedding-3-small"
    )
    Embedding = response.data[0].embedding
    processed_data.append({
        "values": Embedding,
        "id": review['professor'],
        "metadata": {
            "review": review["review"],
            "subject": review["subject"],
            "stars" : review["stars"]
        }
    })

# Accessing the index we created earlier
index = pc.Index(INDEX_NAME)

index.upsert(vectors=processed_data, namespace="ns1")

print(index.describe_index_stats())
