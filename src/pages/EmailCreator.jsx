
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import styles from '../styles/Dashboard.module.css';
import { MdOutlineEmail } from 'react-icons/md';
import { FaChartPie, FaRegCalendarAlt } from 'react-icons/fa';
import { LuSend } from 'react-icons/lu';

export default function EmailCreator() {
  const [isOpenBar, setIsOpenBar] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth > 500;
    }
    return false;
  });
  const token = localStorage.getItem("token");
  const [userInfo, setUserInfo] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = () => {
    axios
      .get(`http://10.37.37.234:8000/api/dashboard/user-info`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const welcome = () => {
    axios
      .get(`http://10.37.37.234:8000/api/dashboard/welcome`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {

      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchData();
    welcome();
    axios
      .get(`http://10.37.37.234:8000/api/protected`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])

  return (
    <div className={styles.container}>
      <Sidebar isOpenBar={isOpenBar} setIsOpenBar={setIsOpenBar} />

      <div className={styles.content}>
        <Header title="Email Creator" setIsOpenBar={setIsOpenBar} />
        

      </div>
    </div>
  );
}