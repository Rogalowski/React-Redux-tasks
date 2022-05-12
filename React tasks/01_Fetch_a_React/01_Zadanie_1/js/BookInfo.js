import React, { useEffect, useState } from "react";

async function fetchBookByISBN(isbn) {
    console.log("???");
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
    );
    return await response.json();
}

export function BookInfo(props) {
    const [data, setData] = useState(false);

    useEffect(() => {
        fetchBookByISBN(props.isbn).then((data) => {
            console.log(data);
            setData(data.items[0]);
        });
    }, []);

    return (
        <div>
            <h1>
                {data
                    ? data.volumeInfo.title
                    : `Searching ISBN: ${props.isbn}...`}
            </h1>{" "}
        </div>
    );
}
