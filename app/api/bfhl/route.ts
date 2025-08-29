import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { data } = body

    if (!data || !Array.isArray(data)) {
      return NextResponse.json(
        {
          is_success: false,
          error: "Invalid input: 'data' must be an array",
        },
        { status: 400 },
      )
    }

    const user_id = "john_doe_17091999"
    const email = "john@xyz.com"
    const roll_number = "ABCD123"
    const odd_numbers: string[] = []
    const even_numbers: string[] = []
    const alphabets: string[] = []
    const special_characters: string[] = []
    let sum = 0
    const alphabetChars: string[] = []


    data.forEach((item: any) => {
      const str = String(item)


      if (!isNaN(Number(str)) && str.trim() !== "") {
        const num = Number(str)
        sum += num

        if (num % 2 === 0) {
          even_numbers.push(str)
        } else {
          odd_numbers.push(str)
        }
      }

      else if (/^[a-zA-Z]+$/.test(str)) {
        alphabets.push(str.toUpperCase())

        for (const char of str) {
          alphabetChars.push(char.toLowerCase())
        }
      }

      else {
        special_characters.push(str)
      }
    })

    const reversedAlphabets = alphabetChars.reverse()
    let concat_string = ""
    reversedAlphabets.forEach((char, index) => {
      if (index % 2 === 0) {
        concat_string += char.toUpperCase()
      } else {
        concat_string += char.toLowerCase()
      }
    })

    const response = {
      is_success: true,
      user_id,
      email,
      roll_number,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string,
    }

    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    console.error("Error processing request:", error)
    return NextResponse.json(
      {
        is_success: false,
        error: "Internal server error",
      },
      { status: 500 },
    )
  }
}


export async function GET() {
  return NextResponse.json({
    message: "BFHL API is running. Use POST method with data array.",
    endpoint: "/api/bfhl",
    method: "POST",
    example_request: {
      data: ["a", "1", "334", "4", "R", "$"],
    },
  })
}
