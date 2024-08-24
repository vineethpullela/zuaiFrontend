import { useEffect, useState } from "react"
import axios from "axios";
import "./index.css"

const blogs=[{id:1,author: "Alec Pronk",
    title: "Other Barks & Bites for Friday, August 23: Music Publishers Petition Supreme Court to Review Overturned $1 Billion Copyright Infringement Judgment; Nike Continues Trademark Infringement Lawsuit Against ‘Shoe Surgeon’",
    description: "This week in Other Barks & Bites: A clip of Vice President Kamala Harris goes viral in which the current presidential candidate advocates “snatching” patents from pharmaceutical companies with high prescription drug prices; a group of music publishers file a …",
    url: "https://ipwatchdog.com/2024/08/23/barks-bites-nike-continues-trademark-infringement-lawsuit/id=180426/",
    urlToImage: "https://ipwatchdog.com/wp-content/uploads/2024/08/Gina-Johnsons-Aruban-Cunucu-rescue-Giolitti.jpg",
    publishedAt: "2024-08-23T19:15:29Z",
    content: "Bite (noun): more meaty news to sink your teeth into.\r\nBark (noun): peripheral noise worth your attention.\r\nThis week in Other Barks &amp; Bites: A clip of Vice President Kamala Harris goes viral in … [+6779 chars]"
    },
    
    {id:2,
    author: "Emily Clark, Kathryn Diss, Rebecca Armitage",
    title: "Who is the 'Kremlin dragon', the wild ally of Vladimir Putin who turned a Tesla truck into a war 'beast'?",
    description: "Ramzan Kadyrov's relationship with Vladimir Putin means he can run Chechnya as his own personal fiefdom and launch strange publicity stunts like mounting a machine gun to a Tesla Cybertruck.",
    url: "https://www.abc.net.au/news/2024-08-24/vladimir-putin-ally-ramzan-kadyrov-annoyed-elon-musk-cybertruck/104256038",
    urlToImage: "https://live-production.wcms.abc-cdn.net.au/44132999230ac074831c1979e971050c?impolicy=wcms_watermark_news&cropH=2023&cropW=3597&xPos=0&yPos=0&width=862&height=485&imformat=generic",
    publishedAt: "2024-08-23T18:53:17Z",
    content: "The Chechen warlord known as the \"Kremlin Dragon\" has always been famous for his audacious publicity stunts. \r\nIn 2011, he lured actress Hillary Swank to his birthday party, he played soccer with Arg… [+15655 chars]"
    },
    {id:3,
    author: "Peter Johnson",
    title: "Porsche launches limited Taycan Turbo K-Edition, but you can’t have it",
    description: "Porsche unveiled the exclusive Taycan Turbo K-Edition on Friday to celebrate its 10th year in Korea. The limited edition Porsche stands apart with unique exterior and interior elements inspired by Korean culture.\n\n\n\n more…",
    url: "http://electrek.co/2024/08/23/porsche-unveils-new-taycan-turbo-k-edition-but-you-cant-have-it/",
    urlToImage: "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2024/08/Porsche-Taycan-K-Edition-1.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    publishedAt: "2024-08-23T18:16:57Z",
    content: "Porsche unveiled the exclusive Taycan Turbo K-Edition on Friday to celebrate its 10th year in Korea. The limited edition Porsche stands apart with unique exterior and interior elements inspired by Ko… [+3171 chars]"
    },
    {id:4,
    author: "Riley Cardoza",
    title: "‘Teen Mom’ star Farrah Abraham buys daughter Sophia, 15, a Tesla Cybertruck for her first car",
    description: "The former MTV personality documented Sophia's \"first day of driver's ed\" in July, saying the teen would be \"getting her license shortly.\"",
    url: "https://pagesix.com/2024/08/23/parents/teen-mom-star-farrah-abraham-buys-daughter-sophia-15-a-tesla-cybertuck/",
    urlToImage: "https://pagesix.com/wp-content/uploads/sites/3/2024/08/88195490.jpg?quality=75&strip=all&w=1024",
    publishedAt: "2024-08-23T18:11:47Z",
    content: "Farrah Abraham’s daughter, Sophia, got a Cybertruck on Friday. Getty Images for Durkin Entertainment\r\nFarrah Abraham’s daughter, Sophia, is ready to hit the road once she gets her license.\r\nThe “Teen… [+2471 chars]"
    },
    
    {id:5,
    author: "Pierluigi Paganini",
    title: "Phishing attacks target mobile users via progressive web applications (PWA)",
    description: "Cybercriminals use progressive web applications (PWA) to impersonate banking apps and steal credentials from mobile users. ESET researchers detailed a phishing campaign against mobile users that uses Progressive Web Applications (PWAs). The threat actors used…",
    url: "https://securityaffairs.com/167472/cyber-crime/phishing-relies-progressive-web-applications.html",
    urlToImage: "https://securityaffairs.com/wp-content/uploads/2024/08/image-34.png",
    publishedAt: "2024-08-23T18:04:32Z",
    content: "Phishing attacks target mobile users via progressive web applications (PWA)\r\n | Member of cybercrime group Karakurt charged in the US\r\n | New malware Cthulhu Stealer targets Apple macOS users\r\n | Chi… [+94390 chars]"
    },
    
    {id:6,
    author: "Christian de Looper",
    title: "Could Chinese cars save us from high EV prices?",
    description: "The electric vehicle market is heating up, but it's still hard to find a great EV on the cheap. Could Chinese EVs save us from that issue?",
    url: "https://www.digitaltrends.com/cars/could-chinese-cars-save-us-from-high-ev-prices/",
    urlToImage: "https://www.digitaltrends.com/wp-content/uploads/2023/12/byd-han.jpg?resize=1200%2C630&p=1",
    publishedAt: "2024-08-23T18:00:40Z",
    content: "The electric vehicle market is seriously heating up, with more great options being released every few months. But while there are more and more excellent electric vehicle options available, it’s stil… [+5154 chars]"
    },
    {id:7,
    author: "Reinette LeJeune",
    title: "Fat Murf e-bike $1,000 off, Lectric’s Labor Day e-bike sale with up to $727 off bundles, GoTrax G6 e-scooter low, more",
    description: "It’s another issue of micromobility solutions in today’s Green Deals, lead by Murf E-Bikes dropping its best-selling Fat Murf Cruiser e-bike by an unexpected $1,000 to a new $1,995 low, along with other models in the lineup seeing price cuts. It is joined by …",
    url: "http://electrek.co/2024/08/23/fat-murf-e-bike-1000-off-lectrics-labor-day-e-bike-sale-with-up-to-727-off-bundles-gotrax-g6-e-scooter-low-more/",
    urlToImage: "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2024/05/Murf-electric-bikes-Fat-Murf-e-bike.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
    publishedAt: "2024-08-23T18:00:00Z",
    content: "It’s another issue of micromobility solutions in today’s Green Deals, lead by Murf E-Bikes dropping its best-selling Fat Murf Cruiser e-bike by an unexpected $1,000 to a new $1,995 low, along with ot… [+10231 chars]"
    },
   {id:8,
    author: "businessinsider.com",
    title: "Tesla's AI supercomputer has a Silicon Valley town rushing to meet surging electricity demand",
    description: "A Tesla Model Y drives past a new electrical substation in Palo Alto, California.\nAlistair Barr/Business Insider\nElon Musk is building supercomputers using advanced AI for Tesla's self-driving vehicles.\nTesla's new AI data center in Palo Alto requires way mor…",
    url: "https://biztoc.com/x/282cdcd08f53f0fa",
    urlToImage: "https://biztoc.com/cdn/800/og.png",
    publishedAt: "2024-08-23T17:39:12Z",
    content: "A Tesla Model Y drives past a new electrical substation in Palo Alto, California.Alistair Barr/Business InsiderElon Musk is building supercomputers using advanced AI for Tesla's self-driving vehicles… [+143 chars]"
    },
    {id:9,
    author: "Austin Blake",
    title: "Tesla Wall Connectors Launch on Amazon Canada",
    description: "Tesla has launched its Wall Connector chargers on Amazon Canada, offering another way to buy the company’s official chargers. The chargers are currently featured in Amazon’s main carousel, offering Canadians the convenience of Prime shipping speeds, reports T…",
    url: "https://www.iphoneincanada.ca/2024/08/23/tesla-wall-connectors-amazon-canada/",
    urlToImage: "https://cdn.iphoneincanada.ca/wp-content/uploads/2017/09/iic-logo-1.svg",
    publishedAt: "2024-08-23T17:33:15Z",
    content: "Tesla has launched its Wall Connector chargers on Amazon Canada, offering another way to buy the company’s official chargers.\r\nThe chargers are currently featured in Amazons main carousel, offering C… [+964 chars]"
    },
    {id:10,
    author: "Christiaan Hetzner",
    title: "Nvidia Q2 results will be ‘the most important tech earnings in years’, predicts tech bull Ives",
    description: "On Wednesday, investors will find out whether bulls like Ives or bears like Elliott are right about AI demand when the chipmaker updates the market.",
    url: "https://fortune.com/2024/08/23/nvidia-jensen-huang-quarterly-earnings-tech-bull-market-ai/",
    urlToImage: "https://fortune.com/img-assets/wp-content/uploads/2024/08/GettyImages-2155573459-e1724429242382.jpg?resize=1200,600",
    publishedAt: "2024-08-23T17:30:28Z",
    content: "Investors need to mark Wednesday in fat red ink on their calendar for next week that could ultimately prove far more important than Federal Reserve chair Jay Powells speech at Jackson Hole. Wedbush S… [+3340 chars]"
    }
    ]

const Home=()=>{

const [blogdata,setblogData]=useState(blogs);
const [serachInput,setSearchInput]=useState("");

useEffect(()=>{
    const fetchData=()=>{
        axios.get("http://localhost:4000/blogs").then(
            res=>setblogData((prevState)=>[...prevState,...res.data])
        )
    }



    fetchData()




},[])

const FilterBlogsData=()=>{
    console.log(serachInput)
    if (serachInput==="  "){
        setblogData([...blogs])
    }
    
    const filter_data=blogdata.filter((each)=>each.title.includes(serachInput))
    setblogData([...filter_data])

}

    return(
        <>
        
    
    <div className="home">
        <div className="search-container">
            <input type="text" onChange={(e)=>setSearchInput(e.target.value)} className="search-input"/>
            <button type="button" onClick={()=>FilterBlogsData()} className="search-btn">search</button>
        </div>
        {blogdata.map((each)=>{

            return(
 <div key={each.id} className="blog-container">
 <h1 className="blog-title">{each.title}</h1>
 <p className="blog-descripton">{each.description}</p>
 <img src={each.urlToImage} alt="img" className="blog-img"/>
 <p className="blog-content">{each.content}</p>
 <p className="blog-published">{each.publishedAt}</p>       
</div>)
        })}
       
    </div>
    </>)
}


export default Home