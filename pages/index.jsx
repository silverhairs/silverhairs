import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@components/Layout";
import profilePic from "@public/me.jpeg";

export default function Home() {
  const [activeTab, setActiveTab] = useState("projects");
  const [song, setSong] = useState({
    artist: "...",
    track: "...",
  });
  const onClickTab = (tab) => setActiveTab(tab);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentDate = () => {
    const month = months[new Date().getMonth()];
    const year = new Date().getFullYear();
    return `${month} ${year}`;
  };

  const spotifyTrack = () => {
    fetch("https://api.spotify.com/v1/me/player/currently-playing?market=US", {
      method: "get",
      headers: new Headers({
        Authorization: `{Bearer BQD1McQUn3fr-58cR4JnCFKLREe4-82_QUCUZzAK3TeUlzgX1biWat_A_LyrbTOjN7YwUy_NfFsuYdwip0Shbw-pqQ6jFHJfQa9ScWP-BNNpWG2J6d2gUpQm0O5asE9Tdnt_UF4hXd79tGOup67xZ3pMPXdv5rs0_p9FH2qfXw`,
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSong({ track: data.item.name, artist: data.item.artists[0].name });
      })
      .catch((e) => {});
  };

  useEffect(() => {
    spotifyTrack();
    setTimeout(() => {
      spotifyTrack();
    }, 300000);
  }, []);
  return (
    <Layout title="Boris Kayi | Web and Mobile Developer">
      <div className="container">
        <div className="profile-head">
          <div className="picture">
            <Image
              src={profilePic}
              alt="Boris Kayi Profile Image"
              layout="intrinsic"
              height={256}
              width={256}
            />
          </div>
          <div className="bio">
            <h1>{"Hey there! 👋️"}</h1>
            <p className="body">
              I am Boris Kayiranga, a Software Engineer who loves playing with
              technologies and building experiences. When I am away of
              computers, I try to get closer to them to watch latest episode of{" "}
              <Link
                href="https://en.wikipedia.org/wiki/One_Piece"
                target="_blank"
                rel="noopener noreferrer"
              >
                One Piece.
              </Link>{" "}
              I also love art, I used to draw and really enjoyed it, but that
              was around than 10years ago, I am trying to get back to it. <br />{" "}
              <br /> I am currently working as a Mobile Application Developer at
              Deriv, and as an beginner artist at home(wanted to write{" "}
              <b>
                {" "}
                <i>drawer</i>
              </b>{" "}
              but
              <b> artist </b>
              just sounds cooler).
            </p>
          </div>
        </div>
        <div className="doing-now">
          <h2>
            {"What I'm doing now"}
            <span className="date">({currentDate()})</span>
          </h2>
          <ul>
            <li>
              <span className="emoji">🏠️</span> Living in <b>Kigali, Rwanda</b>
            </li>
            <li>
              <span className="emoji">📚️</span> Learning about{" "}
              <b>Decentralized Finance</b>
            </li>
            <li>
              <span className="emoji">💻️</span> Working at{" "}
              <b>
                <Link href="https://deriv.com">Deriv</Link>
              </b>
            </li>
            <li>
              <span className="emoji">🎧️</span> Listening to{" "}
              <b>
                {song.artist} - {song.track}
              </b>
            </li>
          </ul>
        </div>
        <div className="drawers">
          <h2>Drawers</h2>
          <div className="tabs">
            <div className="drawers-header">
              <h3
                className={`tab projects ${
                  activeTab === "projects" ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab("projects")}
              >
                Projects
              </h3>
              <h3
                className={`tab articles ${
                  activeTab === "articles" ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab("articles")}
              >
                Articles
              </h3>
            </div>
            <div className="drawers-content"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
