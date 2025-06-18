
// Sample data for lightbox content
const allIncidents = [
    {
        title: 'Should have no stale vulnerability reports older than 36 hours',
        description: 'Periodic Code Repo Scan Monitoring',
        time: '12h ago',
        status: 'Active',
        error: 'Expected 0 stale vulnerability reports, but found 102 reports older than 36 hours. This indicates potential security vulnerabilities that need immediate attention.'
    },
    {
        title: 'Database connection timeout in production',
        description: 'Infrastructure Health Check',
        time: '8h ago',
        status: 'Resolved',
        error: 'Connection timeout after 30 seconds. Database server appears to be under heavy load during peak hours.'
    },
    {
        title: 'API rate limit exceeded for external service',
        description: 'Third-party Integration Monitor',
        time: '6h ago',
        status: 'Active',
        error: 'Rate limit of 1000 requests per hour exceeded. Current rate: 1,247 requests in the last hour.'
    },
    {
        title: 'SSL certificate expiring in 7 days',
        description: 'Security Certificate Monitor',
        time: '4h ago',
        status: 'Warning',
        error: 'SSL certificate for api.example.com expires on 2024-01-15. Please renew before expiration.'
    },
    {
        title: 'Memory usage exceeding 85% threshold',
        description: 'System Resource Monitor',
        time: '2h ago',
        status: 'Active',
        error: 'Memory usage at 87% on server-prod-01. Consider scaling up or optimizing memory usage.'
    }
];

const allTestRuns = [
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
    },
    {
        name: 'Load Balancer Check',
        duration: '@15min',
        status: 'Success',
        details: '2.1s',
        time: '1 hour ago',
        statusClass: 'success'
    },
    {
        name: 'Backup Verification',
        duration: '@6h',
        status: 'Success',
        details: '15.3s',
        time: '2 hours ago',
        statusClass: 'success'
    },
    {
        name: 'API Endpoint Test',
        duration: '@10min',
        status: 'Failure',
        details: '0.5s',
        time: '3 hours ago',
        statusClass: 'failure'
    },
    {
        name: 'Database Query Test',
        duration: '@30min',
        status: 'Success',
        details: '4.2s',
        time: '4 hours ago',
        statusClass: 'success'
    }
];

// SVG Icons
const icons = {
    checkCircle: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22,4 12,14.01 9,11.01"></polyline></svg>',
    xCircle: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',
    alertTriangle: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>'
};

// Lightbox functions
function openLightbox(type) {
    const lightbox = document.getElementById('lightbox');
    const title = document.getElementById('lightbox-title');
    const body = document.getElementById('lightbox-body');
    
    if (type === 'incidents') {
        title.textContent = 'All Recent Incidents';
        body.innerHTML = renderIncidentsLightbox();
    } else if (type === 'testruns') {
        title.textContent = 'All Recent Test Runs';
        body.innerHTML = renderTestRunsLightbox();
    }
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
    if (event && event.target !== event.currentTarget) return;
    
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function renderIncidentsLightbox() {
    return `
        <div class="lightbox-incidents">
            ${allIncidents.map(incident => `
                <div class="lightbox-incident-item">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <div style="width: 32px; height: 32px; background: rgba(254, 242, 242, 0.4); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #dc2626;">
                                ${icons.alertTriangle}
                            </div>
                            <span style="background: rgba(254, 242, 242, 0.6); padding: 4px 8px; border-radius: 8px; font-size: 11px; font-weight: 600; color: #b91c1c;">
                                ${incident.time}
                            </span>
                        </div>
                        <span style="background: rgba(255, 255, 255, 0.4); padding: 3px 8px; border-radius: 12px; font-size: 10px; color: #6b7280;">
                            ${incident.status}
                        </span>
                    </div>
                    <h3 style="font-size: 14px; font-weight: 600; color: #111827; margin-bottom: 8px; line-height: 1.4;">
                        ${incident.title}
                    </h3>
                    <p style="background: rgba(255, 255, 255, 0.2); padding: 8px 12px; border-radius: 8px; font-size: 11px; color: #374151; margin-bottom: 12px;">
                        ${incident.description}
                    </p>
                    <div style="background: rgba(17, 24, 39, 0.9); border-radius: 12px; padding: 12px; font-family: 'Courier New', monospace; font-size: 11px;">
                        <span style="color: #f87171; font-weight: 600;">Error:</span>
                        <span style="color: #d1d5db; margin-left: 6px;">${incident.error}</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderTestRunsLightbox() {
    return `
        <div class="lightbox-testruns">
            ${allTestRuns.map(test => `
                <div class="lightbox-testrun-item ${test.statusClass}">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <div style="width: 32px; height: 32px; border-radius: 12px; display: flex; align-items: center; justify-content: center; background: ${test.statusClass === 'success' ? 'rgba(240, 253, 244, 0.4)' : 'rgba(254, 242, 242, 0.4)'}; color: ${test.statusClass === 'success' ? '#16a34a' : '#dc2626'};">
                            ${test.statusClass === 'success' ? icons.checkCircle : icons.xCircle}
                        </div>
                        <span style="background: rgba(255, 255, 255, 0.4); padding: 4px 8px; border-radius: 8px; font-size: 11px; font-weight: 600; color: #374151;">
                            ${test.duration}
                        </span>
                    </div>
                    <div>
                        <h3 style="font-size: 14px; font-weight: 600; color: #111827; margin-bottom: 4px;">
                            ${test.name}
                        </h3>
                        <div style="display: flex; align-items: center; gap: 8px; font-size: 11px;">
                            <span style="color: #374151; font-weight: 600;">${test.details}</span>
                            <span style="color: #9ca3af;">•</span>
                            <span style="color: ${test.statusClass === 'success' ? '#15803d' : '#b91c1c'}; font-weight: 600;">
                                ${test.status}
                            </span>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 11px; color: #6b7280;">${test.time}</span>
                        <div style="width: 6px; height: 6px; border-radius: 50%; background: ${test.statusClass === 'success' ? '#22c55e' : '#ef4444'}; box-shadow: 0 0 6px ${test.statusClass === 'success' ? 'rgba(34, 197, 94, 0.5)' : 'rgba(239, 68, 68, 0.5)'};"></div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
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
    
    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
});

// Show notification function
function showNotification(message) {
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

// Simulate real-time updates
setInterval(() => {
    // Update timestamps randomly in lightbox if open
    const lightbox = document.getElementById('lightbox');
    if (lightbox.classList.contains('active')) {
        const timeElements = lightbox.querySelectorAll('[style*="color: #6b7280"]');
        const times = ['Just now', '1 min ago', '2 min ago', '5 min ago'];
        
        timeElements.forEach(el => {
            if (Math.random() > 0.98) { // 2% chance to update
                if (el.textContent.includes('min') || el.textContent.includes('now')) {
                    el.textContent = times[Math.floor(Math.random() * times.length)];
                }
            }
        });
    }
}, 5000);
