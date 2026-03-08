from fastapi import FastAPI
from models import CodeRequest
from ai_engine import review_code

app = FastAPI()

@app.post("/review")

async def review(request: CodeRequest):

    result = review_code(request.code)

    return result