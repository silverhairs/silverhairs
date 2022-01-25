import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@components/Layout";
import profilePic from "@public/me.jpeg";

export default function Home() {
  const [activeTab, setActiveTab] = useState(DrawerTab.projects);
  const [song, setSong] = useState<Song>({
    artist: "...",
    track: "...",
  });
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
  const getCurrentDate = () => {
    const month = months[new Date().getMonth()];
    const year = new Date().getFullYear();
    return `${month} ${year}`;
  };

  const fetchSong = () => {
    fetch("https://api.spotify.com/v1/me/player/currently-playing/", {
      method: "get",
      headers: new Headers({
        Authorization: `Basic ${new Buffer('689c4189b9ba49129347ee04d539cb92:9ffb69e4bcc14221afe3ffd37d304ef6').toString('base64')}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSong({ track: data.item.name, artist: data.item.artists[0].name });
        console.log(data);
        
      })
      .catch(console.log);
  };

  useEffect(() => {
    fetchSong();
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
              Hi there! I'm Boris Kayi, a software engineer based in Kigali, Rwanda.

              I am Boris Kayiranga, a Software Engineer who loves playing with
              technologies and building experiences. When I am away from
              computers, I get closer to them and watch latest episode of{" "}
              <Link
                href="https://en.wikipedia.org/wiki/One_Piece"
              >
                One Piece.
              </Link>{" "}
              I also love art, I used to draw and really enjoyed it, but that
              was like 10years ago and right now I have kind of lost it so I am
              trying to get back to it. <br /> I am currently working as a
              Mobile Application Developer at Deriv, and as a beginner artist at
              home(wanted to write{" "}
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
            <span className="date">({getCurrentDate()})</span>
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
                 {song.track}
              </b> by <b>{song.artist}</b>
            </li>
          </ul>
        </div>
        <div className="drawers">
          <h2>Drawers</h2>
          <div className="tabs">
            <div className="drawers-header">
              <h3
                className={`tab projects ${
                  activeTab === DrawerTab.projects ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab(DrawerTab.projects)}
              >
                Projects
              </h3>
              <h3
                className={`tab articles ${
                  activeTab === DrawerTab.aritlces ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab(DrawerTab.aritlces)}
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

interface Song{
  artist :string;
  track : string;
}

enum DrawerTab{
  projects, aritlces
}