// AboutSection.js
import React, { useState } from 'react';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <section id="about">
      <h2>About Us</h2>
      <div>
        <button onClick={() => setActiveTab('tab1')}>Tab 1</button>
        <button onClick={() => setActiveTab('tab2')}>Tab 2</button>
        <button onClick={() => setActiveTab('tab3')}>Tab 3</button>
      </div>
      <div className="tab-content">
        {activeTab === 'tab1' && <p>Content for Tab 1</p>}
        {activeTab === 'tab2' && <p>Content for Tab 2</p>}
        {activeTab === 'tab3' && <p>Content for Tab 3</p>}
      </div>
    </section>
  );
};

export default AboutSection;
