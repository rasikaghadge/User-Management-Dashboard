import { useState } from 'react';
import UserDetailTab from './UserDetailsTab';
import AccountCreationTab from './AccountCreationTab';
import '../assets/styles/Main.css';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('userDetails');

  return (
    <div>
      <main>
        <h1>USER MANAGEMENT</h1>
        <div className='tab-container'>
          <button className={`tab ${activeTab === 'userDetails' ? 'active-tab' : ''}`} onClick={() => setActiveTab('userDetails')}>User Details</button>
          <button className={`tab ${activeTab === 'accountCreation' ? 'active-tab' : ''}`} onClick={() => setActiveTab('accountCreation')}>Account Creation</button>
        </div>
        {activeTab === 'userDetails' && <UserDetailTab />}
        {activeTab === 'accountCreation' && <AccountCreationTab />}
      </main>
    </div>
  );
}
