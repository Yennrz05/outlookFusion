
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import styles from '../styles/Dashboard.module.css';

export default function Dashboard() {
const [isOpenBar, setIsOpenBar] = useState(true

  
);

  return (
    <div className={styles.container}>
      <Sidebar isOpenBar={isOpenBar} setIsOpenBar={setIsOpenBar} />
      
      <div className={styles.content}>
        <Header title="Welcome to OutlookFusion! 👋" setIsOpenBar={setIsOpenBar} />

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statHeader}>
              {/* <History className={styles.statIcon} /> */}
              <span className={styles.statCount}>10</span>
            </div>
            <p className={styles.statLabel}>Credits Available</p>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statHeader}>
              {/* <Mail className={styles.statIcon} /> */}
              <span className={styles.statCount}>4</span>
            </div>
            <p className={styles.statLabel}>Total Mails</p>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statHeader}>
              {/* <LayoutDashboard className={styles.statIcon} /> */}
              <span className={styles.statCount}>25</span>
            </div>
            <p className={styles.statLabel}>Pending Mails</p>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.statHeader}>
              {/* <AlertTriangle className={styles.statIcon} /> */}
              <span className={styles.statCount}>13</span>
            </div>
            <p className={styles.statLabel}>Number of Retries</p>
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
  );
}