from fastapi import FastAPI
from pydantic import BaseModel
from ai_engine import review_code

app = FastAPI()

class CodeRequest(BaseModel):
    code: str

@app.post("/review")
async def review(request: CodeRequest):

    result = review_code(request.code)

    return result