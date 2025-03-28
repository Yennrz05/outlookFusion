
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import styles from '../styles/Dashboard.module.css';
import { MdOutlineEmail } from 'react-icons/md';
import { FaChartPie, FaRegCalendarAlt } from 'react-icons/fa';
import { LuSend } from 'react-icons/lu';

export default function Dashboard() {
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
        <Header title={`Welcome to OutlookFusion! ${userInfo?.username ? userInfo.username : ""}👋`} setIsOpenBar={setIsOpenBar} />
        <div className={styles.conten}>
          <span></span>
          <div className={styles.statsGrid}>
            {/* Tarjeta 1 */}
            <div className="bg-slate-800 p-6 rounded-xl animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-delay:100ms] z-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <MdOutlineEmail className="text-blue-500" size={24} />
                </div>
                <div className="text-slate-400">Credits Available</div>
              </div>
              <div className="text-4xl font-bold text-white">{userInfo?.credits}</div>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-slate-800 p-6 rounded-xl animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-delay:300ms] z-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <LuSend className="text-green-500" size={24} />
                </div>
                <div className="text-slate-400">Total Mails</div>
              </div>
              <div className="text-4xl font-bold text-white">{userInfo?.total_mails}</div>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-slate-800 p-6 rounded-xl animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-delay:500ms] z-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                  <FaRegCalendarAlt className="text-yellow-500" size={24} />
                </div>
                <div className="text-slate-400">Pending Mails</div>
              </div>
              <div className="text-4xl font-bold text-white">{userInfo?.pending_mails}</div>
            </div>

            {/* Tarjeta 4 */}
            <div className="bg-slate-800 p-6 rounded-xl animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-delay:700ms]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <FaChartPie className="text-purple-500" size={24} />
                </div>
                <div className="text-slate-400">Number of Retries</div>
              </div>
              <div className="text-4xl font-bold text-white">{userInfo?.number_of_retries}</div>
            </div>
          </div>
          <div className={styles.mainGrid}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Recent Activity</h2>
              <div className={styles.activityList}>
                {[1, 2, 3].map((i) => (
                  <div key={i} className={styles.activityItem}>
                    <div className={styles.activityInfo}>
                      {/* <Mail className={styles.activityIcon} /> */}
                      <div>
                        <p className={styles.activityTitle}>Email Campaign #{i}</p>
                        <p className={styles.activityTime}>2 hours ago</p>
                      </div>
                    </div>
                    <span className={styles.statusBadge}>
                      Completed
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Performance Overview</h2>
              <div className={styles.performanceList}>
                {[1, 2, 3].map((i) => (
                  <div key={i} className={styles.performanceItem}>
                    <div className={styles.performanceHeader}>
                      <span className={styles.campaignName}>Campaign {i}</span>
                      <span className={styles.campaignProgress}>75%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{ width: '75%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.mainGrid}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Quick Actions</h2>
              <div className={styles.quickActions}>
                <button className={styles.actionButton}>
                  {/* <Mail className={styles.actionIcon} /> */}
                  <h3 className={styles.actionTitle}>New Campaign</h3>
                  <p className={styles.actionDescription}>Create a new email campaign</p>
                </button>
                <button className={styles.actionButton}>
                  {/* <History className={styles.actionIcon} /> */}
                  <h3 className={styles.actionTitle}>View Reports</h3>
                  <p className={styles.actionDescription}>Check campaign performance</p>
                </button>
              </div>
            </div>

            <div className={styles.card}>
              <h2 className={styles.cardTitle}>System Status</h2>
              <div className={styles.statusList}>
                <div className={styles.statusItem}>
                  <span className={styles.serviceName}>API Status</span>
                  <span className={styles.statusBadge}>Operational</span>
                </div>
                <div className={styles.statusItem}>
                  <span className={styles.serviceName}>Email Service</span>
                  <span className={styles.statusBadge}>Operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}