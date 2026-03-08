from pydantic import BaseModel

class CodeRequest(BaseModel):
    code: str


class ReviewResponse(BaseModel):
    bugs: list
    security: list
    optimization: list