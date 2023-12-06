'use client'
import { Box, Text, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Navbar } from "../../component/navbar";

export default function SingleNews(props) {
  const data = useSelector(e => e.newsData.articles);
  const query = decodeURIComponent(props.params.try);
  const replaced = query.replace(/[.,/#!$%^&*;:{}=-_`~()]/g, "");
  const single = data?.filter(el => el.publishedAt.replace(/[.,/#!$%^&*;:{}=-_`~()]/g, "") === replaced);

  return (
    <>
      <Navbar />
      <Box w='80%' m='auto' mt='100px'>
        {single !== undefined && single.length &&
          single.map((el, ind) => (
            <Box key={ind}>
              <Box className="content"><img src={el.urlToImage} alt={el.title} /></Box>
              <Box mt='20px'><Text><span>Title:</span> {el.title}</Text></Box>
              <Box mt='20px'><Text><span>Description:</span> {el.description}</Text></Box>
              <Box mt='20px'><Text><span>Content:</span> {el.content}</Text></Box>
              <Box mt='20px'><Text><span>Author:</span> {el.author}</Text></Box>
            </Box>
          ))
        }
      </Box>
    </>
  );
}
