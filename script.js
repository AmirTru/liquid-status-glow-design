
// Monitoring Schedules Data
const schedules = [
    {
        name: '5 Minute Monitor',
        interval: '@5min',
        status: 'IDLE',
        tests: 1,
        schedule: '*/5 ****',
        statusClass: 'idle'
    },
    {
        name: '30 Minute Monitor',
        interval: '@30min',
        status: 'NEVER RUN',
        tests: 4,
        schedule: '*/30 ****',
        statusClass: 'never-run'
    },
    {
        name: '12 Hour Monitor',
        interval: '@12h',
        status: 'FAILED',
        tests: 11,
        schedule: '0 */12 ***',
        statusClass: 'failed'
    }
];

// Test Runs Data
const testRuns = [
    {
        name: '5 Minute Monitor',
        duration: '@5min',
        status: 'Success',
        details: '3s',
        time: 'Just now',
        statusClass: 'success'
    },
    {
        name: '12 Hour Monitor',
        duration: '@12h',
        status: 'Failure',
        details: '3s',
        time: 'Just now',
        statusClass: 'failure'
    },
    {
        name: '30 Minute Monitor',
        duration: '@30min',
        status: 'Success',
        details: '1.2s',
        time: '2 min ago',
        statusClass: 'success'
    },
    {
        name: 'Daily Health Check',
        duration: '@24h',
        status: 'Success',
        details: '5.8s',
        time: '1 hour ago',
        statusClass: 'success'
    },
    {
        name: 'Security Scan',
        duration: '@6h',
        status: 'Success',
        details: '12.4s',
        time: '3 hours ago',
        statusClass: 'success'
    },
    {
        name: 'Performance Test',
        duration: '@1h',
        status: 'Success',
        details: '0.8s',
        time: '45 min ago',
        statusClass: 'success'
    }
];

// SVG Icons
const icons = {
    play: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5,3 19,12 5,21"></polygon></svg>',
    clock: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline></svg>',
    checkCircle: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22,4 12,14.01 9,11.01"></polyline></svg>',
    xCircle: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>'
};

// Render Monitoring Schedules
function renderSchedules() {
    const schedulesList = document.getElementById('schedulesList');
    
    schedulesList.innerHTML = schedules.map(schedule => `
        <div class="schedule-item ${schedule.statusClass}">
            <div class="schedule-header">
                <h3 class="schedule-name">${schedule.name}</h3>
                <span class="schedule-status ${schedule.statusClass}">${schedule.status}</span>
            </div>
            
            <div class="schedule-interval">
                ${icons.clock}
                <span>${schedule.interval}</span>
            </div>
            
            <div class="schedule-details">
                <div class="detail-item">
                    <div class="detail-label">TESTS</div>
                    <div class="detail-value">${schedule.tests}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">SCHEDULE</div>
                    <div class="detail-value">${schedule.schedule}</div>
                </div>
            </div>
            
            <button class="trigger-btn" onclick="triggerSchedule('${schedule.name}')">
                ${icons.play}
                <span>Trigger Now</span>
            </button>
        </div>
    `).join('');
}

// Render Test Runs
function renderTestRuns() {
    const testRunsGrid = document.getElementById('testRunsGrid');
    
    testRunsGrid.innerHTML = testRuns.map(testRun => `
        <div class="test-run-item ${testRun.statusClass}">
            <div class="test-run-header">
                <div class="test-run-icon-section">
                    <div class="test-run-icon ${testRun.statusClass}">
                        ${testRun.statusClass === 'success' ? icons.checkCircle : icons.xCircle}
                    </div>
                    <span class="test-run-duration">${testRun.duration}</span>
                </div>
                <span class="test-run-time">${testRun.time}</span>
            </div>
            
            <h3 class="test-run-name">${testRun.name}</h3>
            
            <div class="test-run-footer">
                <div class="test-run-info">
                    <span class="test-run-details">${testRun.details}</span>
                    <span class="test-run-separator">•</span>
                    <span class="test-run-status ${testRun.statusClass}">${testRun.status}</span>
                </div>
                <div class="test-run-dot ${testRun.statusClass}"></div>
            </div>
        </div>
    `).join('');
}

// Event Handlers
function triggerSchedule(scheduleName) {
    // Add some visual feedback
    const button = event.target.closest('.trigger-btn');
    const originalText = button.innerHTML;
    
    button.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M12 1v6m0 6v6m6-9h-6m-6 0h6"></path>
        </svg>
        <span>Running...</span>
    `;
    
    button.style.opacity = '0.7';
    button.style.pointerEvents = 'none';
    
    // Simulate API call
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.opacity = '1';
        button.style.pointerEvents = 'auto';
        
        // Show success feedback
        showNotification(`${scheduleName} triggered successfully!`);
    }, 2000);
}

function showNotification(message) {
    // Create a simple notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(34, 197, 94, 0.9);
        color: white;
        padding: 12px 24px;
        border-radius: 12px;
        font-weight: 600;
        z-index: 1000;
        backdrop-filter: blur(24px);
        border: 1px solid rgba(34, 197, 94, 0.3);
        box-shadow: 0 10px 15px -3px rgba(34, 197, 94, 0.2);
        animation: slideIn 0.3s ease-out;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
            document.head.removeChild(style);
        }, 300);
    }, 3000);
}

// Add click handlers for view all buttons
document.addEventListener('DOMContentLoaded', function() {
    // Render initial data
    renderSchedules();
    renderTestRuns();
    
    // Add event listeners for view all buttons
    const viewAllBtns = document.querySelectorAll('.view-all-btn');
    viewAllBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const section = this.closest('.glass-card').querySelector('h2').textContent;
            showNotification(`Viewing all ${section.toLowerCase()}...`);
        });
    });
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.glass-card').forEach(card => {
        observer.observe(card);
    });
    
    // Add CSS for fade in animation
    const animationStyle = document.createElement('style');
    animationStyle.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(animationStyle);
});

// Simulate real-time updates
setInterval(() => {
    // Update timestamps randomly
    const timeElements = document.querySelectorAll('.test-run-time');
    const times = ['Just now', '1 min ago', '2 min ago', '5 min ago'];
    
    timeElements.forEach(el => {
        if (Math.random() > 0.95) { // 5% chance to update
            el.textContent = times[Math.floor(Math.random() * times.length)];
        }
    });
}, 5000);

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Press 'T' to trigger first schedule
    if (e.key.toLowerCase() === 't' && !e.ctrlKey && !e.metaKey) {
        const firstTriggerBtn = document.querySelector('.trigger-btn');
        if (firstTriggerBtn) {
            firstTriggerBtn.click();
        }
    }
    
    // Press 'R' to refresh data
    if (e.key.toLowerCase() === 'r' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        renderSchedules();
        renderTestRuns();
        showNotification('Data refreshed!');
    }
});
