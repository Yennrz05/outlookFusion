
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import styles from '../styles/Dashboard.module.css';
import { MdOutlineEmail } from 'react-icons/md';
import { FaChartPie, FaRegCalendarAlt } from 'react-icons/fa';
import { LuSend } from 'react-icons/lu';

export default function Dashboard() {
  const [isOpenBar, setIsOpenBar] = useState(true);

  return (
    <div className={styles.container}>
      <Sidebar isOpenBar={isOpenBar} setIsOpenBar={setIsOpenBar} />

      <div className={styles.content}>
        <Header title="Welcome to OutlookFusion! 👋" setIsOpenBar={setIsOpenBar} />
        <div className={styles.conten}>
          <div className={styles.statsGrid}>
            <div className="bg-slate-800 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <MdOutlineEmail className="text-blue-500" size={24} />
                </div>
                <div className="text-slate-400">Credits Available</div>
              </div>
              <div className="text-4xl font-bold text-white">10</div>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <LuSend className="text-green-500" size={24} />
                </div>
                <div className="text-slate-400">Total Mails</div>
              </div>
              <div className="text-4xl font-bold text-white">4</div>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                  <FaRegCalendarAlt className="text-yellow-500" size={24} />
                </div>
                <div className="text-slate-400">Pending Mails</div>
              </div>
              <div className="text-4xl font-bold text-white">25</div>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <FaChartPie className="text-purple-500" size={24} />
                </div>
                <div className="text-slate-400">Number of Retries</div>
              </div>
              <div className="text-4xl font-bold text-white">13</div>
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