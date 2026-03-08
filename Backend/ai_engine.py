from openai import OpenAI

client = OpenAI(api_key="YOUR_API_KEY")

def review_code(code):

    prompt = f"""
    Analyze this code and return:
    1 Bugs
    2 Security issues
    3 Optimization suggestions

    Code:
    {code}
    """

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role":"user","content":prompt}]
    )

    return {
        "review": response.choices[0].message.content
    }