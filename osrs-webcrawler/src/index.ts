import axios from 'axios';
import cheerio from 'cheerio';

const crawl = async (url: string) => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    // let rows = []
    const links = $("#mw-content-text > div.mw-parser-output > table:nth-child(6) > tbody > tr:nth-child(1) > td:nth-child(3)").text()
    // const links = $("tbody")
    //   .map((i, tr) => console.log(tr.children.href))
    //   .get()
    console.log(links)

  } catch (error) {
    console.log(error)
  }
}

// crawl("https://oldschool.runescape.wiki/w/Quests/List")
