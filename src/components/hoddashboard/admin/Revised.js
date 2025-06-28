import React, { useEffect, useState } from "react";
import axios from "axios";

import TopNav from "../TopNav";
import "./admin.css";
import SideNav from "../SideNav";
import { FaSpinner } from "react-icons/fa";

const API_KEY = "beb2f01fc849c95627083c43902f3f57";
const BIBLE_ID = "40072c4a5aba4022-01"; // Example KJV ID, replace if necessary

const Revised = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState("");
  const [chapters, setChapters] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState("");
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/books`,
          { headers: { "api-key": API_KEY } }
        );
        setBooks(response.data.data);
      } catch (error) {
        console.error("Error fetching books", error);
      }
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    if (!selectedBook) return;
    const fetchChapters = async () => {
      try {
        const response = await axios.get(
          `https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/books/${selectedBook}/chapters`,
          { headers: { "api-key": API_KEY } }
        );
        setChapters(response.data.data);
      } catch (error) {
        console.error("Error fetching chapters", error);
      }
    };
    fetchChapters();
  }, [selectedBook]);

  const fetchVerses = async () => {
    if (!selectedChapter) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/chapters/${selectedChapter}`,
        { headers: { "api-key": API_KEY } }
      );

      console.log("API Response:", response.data); // Log response

      // Check if content is a string and not an array
      if (typeof response.data.data.content === "string") {
        setVerses([response.data.data.content]); // Convert to array
      } else {
        setVerses(response.data.data.content); // Use content as it is
      }
    } catch (error) {
      console.error("Error fetching verses", error);
    }
    setLoading(false);
  };

  return (
    <div>
      <body>
        <div className="main-wrapper">
          <TopNav />
          <SideNav />
          <div className="page-wrapper">
            <div className="content">
              <div>
                <div>
                  <h2 className="text-xl font-bold mb-4">
                    Revised Standard Version
                  </h2>
                  <div className="flex gap-4 mb-4">
                    <select
                      className="p-3 border rounded-md "
                      style={{
                        marginRight: "15px",
                        border: "1px solid purple",
                        borderRadius: "5px",
                      }}
                      value={selectedBook}
                      onChange={(e) => setSelectedBook(e.target.value)}
                    >
                      <option value="">Select Book</option>
                      {books.map((book) => (
                        <option key={book.id} value={book.id}>
                          {book.name}
                        </option>
                      ))}
                    </select>
                    <select
                      className="p-3 border rounded-md"
                      style={{
                        marginRight: "15px",
                        border: "1px solid purple",
                        borderRadius: "5px",
                      }}
                      value={selectedChapter}
                      onChange={(e) => setSelectedChapter(e.target.value)}
                    >
                      <option value="">Select Chapter</option>
                      {chapters.map((chapter) => (
                        <option key={chapter.id} value={chapter.id}>
                          {chapter.number}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={fetchVerses}
                      disabled={loading}
                      style={{ backgroundColor: "purple", color: "white" }}
                    >
                      {loading ? (
                        <FaSpinner className="animate-spin" />
                      ) : (
                        "Fetch Verses"
                      )}
                    </button>
                  </div>
                  <div className="border p-4 rounded bg-gray-100">
                    {verses.length > 0 ? (
                      verses.map((verse, index) => (
                        <p
                          key={index}
                          className="mb-2"
                          dangerouslySetInnerHTML={{ __html: verse }}
                        ></p>
                      ))
                    ) : (
                      <p>No verses to display</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Revised;
