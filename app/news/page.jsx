'use client'
import { useEffect } from "react";
import { Listview } from "../component/listview";
import { useDispatch, useSelector } from '../redux/provider';
import { getNews } from "../redux/action";
import { Navbar } from "../component/navbar";

export default function News() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews);
  }, []);

  return (
    <>
      <Navbar />
      <Listview total={true} />
    </>
  );
}
