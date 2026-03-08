from openai import OpenAI
from security_scan import scan_security

client = OpenAI(api_key="YOUR_API_KEY")

def review_code(code):

    security_issues = scan_security(code)

    prompt = f"""
    Analyze this code.

    Return:
    1. Bugs
    2. Optimization suggestions

    Code:
    {code}
    """

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role":"user","content":prompt}]
    )

    return {
        "review": response.choices[0].message.content,
        "security": security_issues
    }