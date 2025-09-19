// NeuxConnect Application JavaScript

// Application Data
const appData = {
  users: [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      email: "sarah.johnson@university.edu",
      role: "Alumni",
      batch: "2018",
      department: "Computer Science",
      company: "Google",
      position: "Senior Software Engineer",
      location: "San Francisco, CA",
      skills: ["Machine Learning", "Python", "Leadership"],
      mentorshipAvailable: true,
      profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: "2",
      name: "Alex Chen",
      email: "alex.chen@student.edu",
      role: "Student",
      batch: "2025",
      department: "Computer Science",
      year: "3rd Year",
      gpa: "3.8",
      interests: ["Web Development", "AI", "Startups"],
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: "3",
      name: "Prof. Michael Davis",
      email: "m.davis@university.edu",
      role: "Faculty",
      department: "Computer Science",
      position: "Associate Professor",
      specialization: "Data Structures and Algorithms",
      yearsExperience: 15,
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: "4",
      name: "Jennifer Martinez",
      email: "j.martinez@techcorp.com",
      role: "Employer",
      company: "TechCorp Solutions",
      position: "HR Director",
      industry: "Technology",
      companySize: "500-1000",
      profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: "5",
      name: "Dr. Robert Wilson",
      email: "admin@university.edu",
      role: "Admin",
      position: "Alumni Relations Director",
      department: "Administration",
      permissions: "all",
      profileImage: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop&crop=face"
    }
  ],
  events: [
    {
      id: "1",
      title: "Annual Tech Symposium 2024",
      description: "Join us for the biggest tech event of the year featuring keynotes from industry leaders",
      date: "2024-11-15",
      time: "09:00 AM",
      location: "University Auditorium",
      type: "Conference",
      organizer: "Prof. Michael Davis",
      capacity: 300,
      registered: 156,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop"
    },
    {
      id: "2",
      title: "Alumni Networking Mixer",
      description: "Connect with fellow alumni in your area over drinks and appetizers",
      date: "2024-10-28",
      time: "06:00 PM",
      location: "Downtown Convention Center",
      type: "Networking",
      organizer: "Dr. Sarah Johnson",
      capacity: 150,
      registered: 89,
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=200&fit=crop"
    },
    {
      id: "3",
      title: "Career Fair 2024",
      description: "Meet with top employers and explore career opportunities",
      date: "2024-11-22",
      time: "10:00 AM",
      location: "Student Center",
      type: "Career",
      organizer: "Jennifer Martinez",
      capacity: 500,
      registered: 234,
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=200&fit=crop"
    }
  ],
  jobs: [
    {
      id: "1",
      title: "Software Engineer Intern",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      type: "Internship",
      salary: "$25/hour",
      description: "Join our team as a software engineering intern and work on cutting-edge projects",
      requirements: ["Python", "React", "Git"],
      postedBy: "Jennifer Martinez",
      posted: "2024-10-01",
      applications: 45
    },
    {
      id: "2",
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      type: "Full-time",
      salary: "$80,000 - $100,000",
      description: "Looking for a passionate full-stack developer to join our growing team",
      requirements: ["JavaScript", "Node.js", "MongoDB", "React"],
      postedBy: "Dr. Sarah Johnson",
      posted: "2024-09-28",
      applications: 23
    },
    {
      id: "3",
      title: "Data Science Research Assistant",
      company: "University Research Lab",
      location: "On Campus",
      type: "Part-time",
      salary: "$20/hour",
      description: "Assist with data analysis and machine learning research projects",
      requirements: ["Python", "Statistics", "Machine Learning"],
      postedBy: "Prof. Michael Davis",
      posted: "2024-10-05",
      applications: 18
    }
  ],
  mentorships: [
    {
      id: "1",
      mentor: "Dr. Sarah Johnson",
      mentee: "Alex Chen",
      field: "Software Engineering",
      status: "Active",
      startDate: "2024-09-01",
      sessionsCompleted: 3,
      nextSession: "2024-10-15"
    }
  ],
  campaigns: [
    {
      id: "1",
      title: "New Computer Lab Fund",
      description: "Help us build a state-of-the-art computer lab for our students",
      goal: 50000,
      raised: 32500,
      donors: 87,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop",
      endDate: "2024-12-31"
    },
    {
      id: "2",
      title: "Scholarship Fund",
      description: "Support deserving students with financial assistance",
      goal: 100000,
      raised: 68750,
      donors: 156,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=200&fit=crop",
      endDate: "2024-11-30"
    }
  ],
  analytics: {
    totalAlumni: 5420,
    totalStudents: 2340,
    totalFaculty: 156,
    activeUsers: 1230,
    eventsThisMonth: 12,
    jobPostings: 45,
    mentorshipMatches: 89,
    totalDonations: 234500,
    engagementRate: 73
  }
};

// Application State
let currentUser = null;
let searchResults = [];
let charts = {};

// Role-based menu items
const menuItems = {
  Alumni: [
    { id: 'overview', icon: 'home', label: 'Dashboard' },
    { id: 'profile', icon: 'user', label: 'My Profile' },
    { id: 'events', icon: 'calendar', label: 'Events' },
    { id: 'mentorship', icon: 'users', label: 'Mentorship' },
    { id: 'jobs', icon: 'briefcase', label: 'Job Board' },
    { id: 'fundraising', icon: 'heart', label: 'Donate' }
  ],
  Student: [
    { id: 'overview', icon: 'home', label: 'Dashboard' },
    { id: 'profile', icon: 'user', label: 'My Profile' },
    { id: 'jobs', icon: 'briefcase', label: 'Job Board' },
    { id: 'mentorship', icon: 'users', label: 'Find Mentors' },
    { id: 'events', icon: 'calendar', label: 'Events' }
  ],
  Faculty: [
    { id: 'overview', icon: 'home', label: 'Dashboard' },
    { id: 'profile', icon: 'user', label: 'My Profile' },
    { id: 'events', icon: 'calendar', label: 'Events' },
    { id: 'jobs', icon: 'briefcase', label: 'Post Opportunities' },
    { id: 'mentorship', icon: 'users', label: 'Alumni Network' }
  ],
  Employer: [
    { id: 'overview', icon: 'home', label: 'Dashboard' },
    { id: 'profile', icon: 'user', label: 'Company Profile' },
    { id: 'jobs', icon: 'briefcase', label: 'Post Jobs' },
    { id: 'events', icon: 'calendar', label: 'Recruitment Events' }
  ],
  Admin: [
    { id: 'overview', icon: 'home', label: 'Dashboard' },
    { id: 'profile', icon: 'user', label: 'Admin Profile' },
    { id: 'events', icon: 'calendar', label: 'All Events' },
    { id: 'jobs', icon: 'briefcase', label: 'All Jobs' },
    { id: 'mentorship', icon: 'users', label: 'Mentorship Program' },
    { id: 'fundraising', icon: 'heart', label: 'Fundraising' }
  ]
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupEventListeners();
});

function initializeApp() {
  // Ensure all modals are hidden on startup
  hideAllModals();
  
  // Check if user is logged in (mock check)
  const savedUser = localStorage.getItem('neuxconnect_user');
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
    showDashboard();
  } else {
    showLandingPage();
  }
}

function hideAllModals() {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.classList.add('hidden');
  });
}

function setupEventListeners() {
  // Global search
  const globalSearch = document.getElementById('globalSearch');
  if (globalSearch) {
    globalSearch.addEventListener('input', debounce(handleGlobalSearch, 300));
  }

  // Form submissions
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
  }

  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', handleRegister);
  }

  const donateForm = document.getElementById('donateForm');
  if (donateForm) {
    donateForm.addEventListener('submit', handleDonate);
  }

  // Filter changes
  const roleFilter = document.getElementById('roleFilter');
  const departmentFilter = document.getElementById('departmentFilter');
  if (roleFilter) roleFilter.addEventListener('change', filterSearchResults);
  if (departmentFilter) departmentFilter.addEventListener('change', filterSearchResults);

  // Modal close events
  setupModalCloseEvents();
  
  // Escape key to close modals
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      hideAllModals();
    }
  });
}

function setupModalCloseEvents() {
  // Close modal when clicking outside
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
      e.target.classList.add('hidden');
    }
  });

  // Close modal buttons
  document.querySelectorAll('.modal-close').forEach(button => {
    button.addEventListener('click', function() {
      const modal = button.closest('.modal');
      if (modal) {
        modal.classList.add('hidden');
      }
    });
  });
}

// Authentication functions
function showLogin() {
  hideAllModals();
  document.getElementById('loginModal').classList.remove('hidden');
}

function showRegister() {
  hideAllModals();
  document.getElementById('registerModal').classList.remove('hidden');
}

function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
  }
}

function demoLogin(role) {
  const user = appData.users.find(u => u.role === role);
  if (user) {
    currentUser = user;
    localStorage.setItem('neuxconnect_user', JSON.stringify(user));
    hideModal('loginModal');
    showDashboard();
  }
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const user = appData.users.find(u => u.email === email);
  
  if (user) {
    currentUser = user;
    localStorage.setItem('neuxconnect_user', JSON.stringify(user));
    hideModal('loginModal');
    showDashboard();
  } else {
    alert('User not found. Try using one of the demo accounts.');
  }
}

function handleRegister(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const userData = Object.fromEntries(formData);
  
  // Mock registration
  const newUser = {
    id: Date.now().toString(),
    name: userData.name,
    email: userData.email,
    role: userData.role,
    profileImage: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face`,
    ...userData
  };
  
  appData.users.push(newUser);
  currentUser = newUser;
  localStorage.setItem('neuxconnect_user', JSON.stringify(newUser));
  hideModal('registerModal');
  showDashboard();
}

function logout() {
  currentUser = null;
  localStorage.removeItem('neuxconnect_user');
  showLandingPage();
}

// Page navigation
function showLandingPage() {
  document.getElementById('landingPage').classList.remove('hidden');
  document.getElementById('dashboard').classList.add('hidden');
  document.getElementById('navGuest').classList.remove('hidden');
  document.getElementById('navUser').classList.add('hidden');
}

function showDashboard() {
  document.getElementById('landingPage').classList.add('hidden');
  document.getElementById('dashboard').classList.remove('hidden');
  document.getElementById('navGuest').classList.add('hidden');
  document.getElementById('navUser').classList.remove('hidden');
  
  updateNavigation();
  renderSidebar();
  showSection('overview');
}

function updateNavigation() {
  if (!currentUser) return;
  
  document.getElementById('navUserName').textContent = currentUser.name;
  document.getElementById('navUserAvatar').src = currentUser.profileImage;
  document.getElementById('dashboardUserName').textContent = currentUser.name;
  document.getElementById('dashboardUserRole').textContent = currentUser.role;
  document.getElementById('dashboardUserAvatar').src = currentUser.profileImage;
  document.getElementById('dashboardTitle').textContent = `${currentUser.role} Dashboard`;
}

function renderSidebar() {
  if (!currentUser) return;
  
  const sidebarMenu = document.getElementById('sidebarMenu');
  const items = menuItems[currentUser.role] || [];
  
  sidebarMenu.innerHTML = items.map(item => `
    <button class="menu-item" onclick="showSection('${item.id}')" data-section="${item.id}">
      <i class="lucide-${item.icon}"></i>
      ${item.label}
    </button>
  `).join('');
  
  // Set first item as active
  if (items.length > 0) {
    sidebarMenu.querySelector('.menu-item').classList.add('active');
  }
}

function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.add('hidden');
  });
  
  // Hide search results
  document.getElementById('searchResults').classList.add('hidden');
  document.getElementById('dashboardContent').classList.remove('hidden');
  
  // Show selected section
  document.getElementById(sectionId).classList.remove('hidden');
  
  // Update active menu item
  document.querySelectorAll('.menu-item').forEach(item => {
    item.classList.remove('active');
  });
  document.querySelector(`[data-section="${sectionId}"]`)?.classList.add('active');
  
  // Load section content
  switch(sectionId) {
    case 'overview':
      renderOverview();
      break;
    case 'events':
      renderEvents();
      break;
    case 'jobs':
      renderJobs();
      break;
    case 'mentorship':
      renderMentorship();
      break;
    case 'fundraising':
      renderFundraising();
      break;
    case 'profile':
      renderProfile();
      break;
  }
}

// Search functionality
function handleGlobalSearch(e) {
  const query = e.target.value.trim().toLowerCase();
  
  if (query.length < 2) {
    clearSearch();
    return;
  }
  
  searchResults = performSearch(query);
  displaySearchResults();
}

function performSearch(query) {
  const results = [];
  
  // Search users
  appData.users.forEach(user => {
    if (user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.department?.toLowerCase().includes(query) ||
        user.company?.toLowerCase().includes(query) ||
        user.skills?.some(skill => skill.toLowerCase().includes(query))) {
      results.push({ type: 'user', data: user });
    }
  });
  
  // Search events
  appData.events.forEach(event => {
    if (event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.type.toLowerCase().includes(query)) {
      results.push({ type: 'event', data: event });
    }
  });
  
  // Search jobs
  appData.jobs.forEach(job => {
    if (job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query) ||
        job.requirements.some(req => req.toLowerCase().includes(query))) {
      results.push({ type: 'job', data: job });
    }
  });
  
  return results;
}

function displaySearchResults() {
  document.getElementById('searchResults').classList.remove('hidden');
  document.getElementById('dashboardContent').classList.add('hidden');
  
  const container = document.getElementById('searchResultsList');
  container.innerHTML = searchResults.map(result => {
    switch(result.type) {
      case 'user':
        return renderUserSearchResult(result.data);
      case 'event':
        return renderEventSearchResult(result.data);
      case 'job':
        return renderJobSearchResult(result.data);
      default:
        return '';
    }
  }).join('');
}

function renderUserSearchResult(user) {
  return `
    <div class="search-result-item">
      <img src="${user.profileImage}" alt="${user.name}" class="search-result-avatar">
      <div class="search-result-info">
        <h4>${user.name}</h4>
        <div class="search-result-meta">
          ${user.role} • ${user.department || user.company || 'N/A'} • ${user.location || user.batch || 'N/A'}
        </div>
      </div>
    </div>
  `;
}

function renderEventSearchResult(event) {
  return `
    <div class="search-result-item">
      <div class="search-result-info">
        <h4>${event.title}</h4>
        <div class="search-result-meta">
          Event • ${event.date} • ${event.location}
        </div>
      </div>
    </div>
  `;
}

function renderJobSearchResult(job) {
  return `
    <div class="search-result-item">
      <div class="search-result-info">
        <h4>${job.title}</h4>
        <div class="search-result-meta">
          ${job.company} • ${job.type} • ${job.location}
        </div>
      </div>
    </div>
  `;
}

function filterSearchResults() {
  const roleFilter = document.getElementById('roleFilter').value;
  const departmentFilter = document.getElementById('departmentFilter').value;
  
  let filtered = searchResults;
  
  if (roleFilter) {
    filtered = filtered.filter(result => 
      result.type !== 'user' || result.data.role === roleFilter
    );
  }
  
  if (departmentFilter) {
    filtered = filtered.filter(result => 
      result.type !== 'user' || result.data.department === departmentFilter
    );
  }
  
  const container = document.getElementById('searchResultsList');
  container.innerHTML = filtered.map(result => {
    switch(result.type) {
      case 'user':
        return renderUserSearchResult(result.data);
      case 'event':
        return renderEventSearchResult(result.data);
      case 'job':
        return renderJobSearchResult(result.data);
      default:
        return '';
    }
  }).join('');
}

function clearSearch() {
  document.getElementById('globalSearch').value = '';
  document.getElementById('searchResults').classList.add('hidden');
  document.getElementById('dashboardContent').classList.remove('hidden');
  searchResults = [];
}

// Dashboard sections
function renderOverview() {
  updateStats();
  renderCharts();
}

function updateStats() {
  const stats = getRoleSpecificStats();
  
  document.getElementById('totalConnections').textContent = stats.connections;
  document.getElementById('upcomingEvents').textContent = stats.events;
  document.getElementById('jobOpportunities').textContent = stats.jobs;
  document.getElementById('donationsRaised').textContent = `$${stats.donations.toLocaleString()}`;
}

function getRoleSpecificStats() {
  switch(currentUser?.role) {
    case 'Alumni':
      return {
        connections: 42,
        events: 3,
        jobs: 8,
        donations: 2500
      };
    case 'Student':
      return {
        connections: 15,
        events: 5,
        jobs: 12,
        donations: 0
      };
    case 'Faculty':
      return {
        connections: 89,
        events: 2,
        jobs: 3,
        donations: 5000
      };
    case 'Employer':
      return {
        connections: 156,
        events: 1,
        jobs: 5,
        donations: 10000
      };
    case 'Admin':
      return {
        connections: appData.analytics.totalAlumni,
        events: appData.analytics.eventsThisMonth,
        jobs: appData.analytics.jobPostings,
        donations: appData.analytics.totalDonations
      };
    default:
      return { connections: 0, events: 0, jobs: 0, donations: 0 };
  }
}

function renderCharts() {
  setTimeout(() => {
    // Engagement Chart
    const engagementCtx = document.getElementById('engagementChart');
    if (engagementCtx && !charts.engagement) {
      charts.engagement = new Chart(engagementCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Engagement',
            data: [65, 72, 68, 75, 82, 78],
            borderColor: '#1E3A8A',
            backgroundColor: 'rgba(30, 58, 138, 0.1)',
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    }
    
    // Network Chart
    const networkCtx = document.getElementById('networkChart');
    if (networkCtx && !charts.network) {
      charts.network = new Chart(networkCtx, {
        type: 'doughnut',
        data: {
          labels: ['Alumni', 'Students', 'Faculty', 'Employers'],
          datasets: [{
            data: [65, 25, 8, 2],
            backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom'
            }
          }
        }
      });
    }
  }, 100);
}

function renderEvents() {
  const container = document.getElementById('eventsGrid');
  container.innerHTML = appData.events.map(event => `
    <div class="event-card" onclick="showEventModal('${event.id}')">
      <img src="${event.image}" alt="${event.title}" class="event-image">
      <div class="event-content">
        <div class="event-date">${formatDate(event.date)}</div>
        <h3 class="event-title">${event.title}</h3>
        <p>${event.description}</p>
        <div class="event-meta">
          <span><i class="lucide-clock"></i> ${event.time}</span>
          <span><i class="lucide-map-pin"></i> ${event.location}</span>
        </div>
        <div class="event-capacity">
          ${event.registered}/${event.capacity} registered
        </div>
      </div>
    </div>
  `).join('');
}

function renderJobs() {
  const container = document.getElementById('jobsList');
  container.innerHTML = appData.jobs.map(job => `
    <div class="job-card" onclick="showJobModal('${job.id}')">
      <div class="job-header">
        <div>
          <h3 class="job-title">${job.title}</h3>
          <div class="job-company">${job.company}</div>
        </div>
        <div class="job-type">${job.type}</div>
      </div>
      <div class="job-meta">
        <span><i class="lucide-map-pin"></i> ${job.location}</span>
        <span><i class="lucide-dollar-sign"></i> ${job.salary}</span>
        <span><i class="lucide-users"></i> ${job.applications} applications</span>
      </div>
      <div class="job-requirements">
        ${job.requirements.map(req => `<span class="requirement-tag">${req}</span>`).join('')}
      </div>
      <p>${job.description}</p>
    </div>
  `).join('');
}

function renderMentorship() {
  const container = document.getElementById('mentorshipContent');
  
  if (currentUser?.role === 'Student') {
    // Show available mentors for students
    const mentors = appData.users.filter(u => u.role === 'Alumni' && u.mentorshipAvailable);
    container.innerHTML = `
      <div class="mentorship-grid">
        ${mentors.map(mentor => `
          <div class="mentorship-card">
            <div class="mentorship-header">
              <div class="mentorship-participants">
                <div class="participant">
                  <img src="${mentor.profileImage}" alt="${mentor.name}">
                  <span>${mentor.name}</span>
                </div>
              </div>
              <button class="btn btn--primary btn--sm" onclick="requestMentorship('${mentor.id}')">
                Request Mentorship
              </button>
            </div>
            <div class="mentorship-details">
              <p><strong>Expertise:</strong> ${mentor.skills?.join(', ') || 'N/A'}</p>
              <p><strong>Company:</strong> ${mentor.company}</p>
              <p><strong>Position:</strong> ${mentor.position}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else {
    // Show existing mentorships
    container.innerHTML = appData.mentorships.map(mentorship => `
      <div class="mentorship-card">
        <div class="mentorship-header">
          <div class="mentorship-participants">
            <div class="participant">
              <img src="${getMentorImage(mentorship.mentor)}" alt="${mentorship.mentor}">
              <span>${mentorship.mentor}</span>
            </div>
            <span>→</span>
            <div class="participant">
              <img src="${getMenteeImage(mentorship.mentee)}" alt="${mentorship.mentee}">
              <span>${mentorship.mentee}</span>
            </div>
          </div>
          <div class="mentorship-status status--active">${mentorship.status}</div>
        </div>
        <div class="mentorship-details">
          <p><strong>Field:</strong> ${mentorship.field}</p>
          <p><strong>Sessions Completed:</strong> ${mentorship.sessionsCompleted}</p>
          <p><strong>Next Session:</strong> ${formatDate(mentorship.nextSession)}</p>
        </div>
      </div>
    `).join('');
  }
}

function renderFundraising() {
  const container = document.getElementById('campaignsGrid');
  container.innerHTML = appData.campaigns.map(campaign => `
    <div class="campaign-card">
      <img src="${campaign.image}" alt="${campaign.title}" class="campaign-image">
      <div class="campaign-content">
        <h3 class="campaign-title">${campaign.title}</h3>
        <p>${campaign.description}</p>
        <div class="campaign-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${(campaign.raised / campaign.goal) * 100}%"></div>
          </div>
          <div class="progress-text">
            <span>$${campaign.raised.toLocaleString()} raised</span>
            <span>$${campaign.goal.toLocaleString()} goal</span>
          </div>
        </div>
        <button class="btn btn--primary btn--full-width" onclick="donateToCampaign('${campaign.id}')">
          Donate Now
        </button>
      </div>
    </div>
  `).join('');
}

function renderProfile() {
  const container = document.getElementById('profileContent');
  if (!currentUser) return;
  
  container.innerHTML = `
    <div class="profile-header">
      <img src="${currentUser.profileImage}" alt="${currentUser.name}" class="profile-avatar">
      <div class="profile-info">
        <h3>${currentUser.name}</h3>
        <p>${currentUser.role}</p>
        <p>${currentUser.email}</p>
      </div>
    </div>
    <div class="profile-details">
      <div class="profile-section">
        <h4>Personal Information</h4>
        ${getProfileFields().map(field => `
          <div class="profile-item">
            <span class="profile-label">${field.label}:</span>
            <span class="profile-value">${field.value}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function getProfileFields() {
  const fields = [
    { label: 'Name', value: currentUser.name },
    { label: 'Email', value: currentUser.email },
    { label: 'Role', value: currentUser.role }
  ];
  
  if (currentUser.department) fields.push({ label: 'Department', value: currentUser.department });
  if (currentUser.company) fields.push({ label: 'Company', value: currentUser.company });
  if (currentUser.position) fields.push({ label: 'Position', value: currentUser.position });
  if (currentUser.location) fields.push({ label: 'Location', value: currentUser.location });
  if (currentUser.batch) fields.push({ label: 'Batch', value: currentUser.batch });
  if (currentUser.skills) fields.push({ label: 'Skills', value: currentUser.skills.join(', ') });
  
  return fields;
}

// Modal functions
function showEventModal(eventId) {
  const event = appData.events.find(e => e.id === eventId);
  if (!event) return;
  
  document.getElementById('eventModalTitle').textContent = event.title;
  document.getElementById('eventModalBody').innerHTML = `
    <img src="${event.image}" alt="${event.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 16px;">
    <p>${event.description}</p>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 16px 0;">
      <div><strong>Date:</strong> ${formatDate(event.date)}</div>
      <div><strong>Time:</strong> ${event.time}</div>
      <div><strong>Location:</strong> ${event.location}</div>
      <div><strong>Type:</strong> ${event.type}</div>
      <div><strong>Organizer:</strong> ${event.organizer}</div>
      <div><strong>Capacity:</strong> ${event.registered}/${event.capacity}</div>
    </div>
    <button class="btn btn--primary btn--full-width" onclick="rsvpEvent('${eventId}')">RSVP to Event</button>
  `;
  document.getElementById('eventModal').classList.remove('hidden');
}

function showJobModal(jobId) {
  const job = appData.jobs.find(j => j.id === jobId);
  if (!job) return;
  
  document.getElementById('jobModalTitle').textContent = job.title;
  document.getElementById('jobModalBody').innerHTML = `
    <div style="margin-bottom: 16px;">
      <h4>${job.company}</h4>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Type:</strong> ${job.type}</p>
      <p><strong>Salary:</strong> ${job.salary}</p>
    </div>
    <div style="margin-bottom: 16px;">
      <h5>Job Description</h5>
      <p>${job.description}</p>
    </div>
    <div style="margin-bottom: 16px;">
      <h5>Requirements</h5>
      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
        ${job.requirements.map(req => `<span class="requirement-tag">${req}</span>`).join('')}
      </div>
    </div>
    <div style="margin-bottom: 16px;">
      <p><strong>Posted by:</strong> ${job.postedBy}</p>
      <p><strong>Posted on:</strong> ${formatDate(job.posted)}</p>
      <p><strong>Applications:</strong> ${job.applications}</p>
    </div>
    <button class="btn btn--primary btn--full-width" onclick="applyToJob('${jobId}')">Apply for Job</button>
  `;
  document.getElementById('jobModal').classList.remove('hidden');
}

function showCreateEventModal() {
  document.getElementById('eventModalTitle').textContent = 'Create New Event';
  document.getElementById('eventModalBody').innerHTML = `
    <form id="createEventForm">
      <div class="form-group">
        <label class="form-label" for="eventTitle">Event Title</label>
        <input type="text" id="eventTitle" class="form-control" required>
      </div>
      <div class="form-group">
        <label class="form-label" for="eventDescription">Description</label>
        <textarea id="eventDescription" class="form-control" rows="3" required></textarea>
      </div>
      <div class="form-group">
        <label class="form-label" for="eventDate">Date</label>
        <input type="date" id="eventDate" class="form-control" required>
      </div>
      <div class="form-group">
        <label class="form-label" for="eventTime">Time</label>
        <input type="time" id="eventTime" class="form-control" required>
      </div>
      <div class="form-group">
        <label class="form-label" for="eventLocation">Location</label>
        <input type="text" id="eventLocation" class="form-control" required>
      </div>
      <button type="submit" class="btn btn--primary btn--full-width">Create Event</button>
    </form>
  `;
  document.getElementById('eventModal').classList.remove('hidden');
  
  document.getElementById('createEventForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Event created successfully!');
    hideModal('eventModal');
  });
}

function showCreateJobModal() {
  document.getElementById('jobModalTitle').textContent = 'Post New Job';
  document.getElementById('jobModalBody').innerHTML = `
    <form id="createJobForm">
      <div class="form-group">
        <label class="form-label" for="jobTitle">Job Title</label>
        <input type="text" id="jobTitle" class="form-control" required>
      </div>
      <div class="form-group">
        <label class="form-label" for="jobCompany">Company</label>
        <input type="text" id="jobCompany" class="form-control" required>
      </div>
      <div class="form-group">
        <label class="form-label" for="jobLocation">Location</label>
        <input type="text" id="jobLocation" class="form-control" required>
      </div>
      <div class="form-group">
        <label class="form-label" for="jobType">Job Type</label>
        <select id="jobType" class="form-control" required>
          <option value="">Select Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Internship">Internship</option>
          <option value="Contract">Contract</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label" for="jobSalary">Salary Range</label>
        <input type="text" id="jobSalary" class="form-control" required>
      </div>
      <div class="form-group">
        <label class="form-label" for="jobDescription">Job Description</label>
        <textarea id="jobDescription" class="form-control" rows="4" required></textarea>
      </div>
      <button type="submit" class="btn btn--primary btn--full-width">Post Job</button>
    </form>
  `;
  document.getElementById('jobModal').classList.remove('hidden');
  
  document.getElementById('createJobForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Job posted successfully!');
    hideModal('jobModal');
  });
}

function showMentorshipModal() {
  alert('Mentorship request feature would be implemented here.');
}

function showDonateModal() {
  hideAllModals();
  document.getElementById('donateModal').classList.remove('hidden');
}

// Action functions
function rsvpEvent(eventId) {
  alert('RSVP confirmed! You will receive a confirmation email.');
  hideModal('eventModal');
}

function applyToJob(jobId) {
  alert('Application submitted successfully!');
  hideModal('jobModal');
}

function requestMentorship(mentorId) {
  alert('Mentorship request sent!');
}

function donateToCampaign(campaignId) {
  document.getElementById('donateCampaign').value = campaignId;
  showDonateModal();
}

function handleDonate(e) {
  e.preventDefault();
  const amount = document.getElementById('donateAmount').value;
  alert(`Thank you for your donation of $${amount}!`);
  hideModal('donateModal');
}

function editProfile() {
  alert('Profile editing feature would be implemented here.');
}

function updateRegisterFields() {
  const role = document.getElementById('registerRole').value;
  const container = document.getElementById('dynamicFields');
  
  let fields = '';
  
  switch(role) {
    case 'Alumni':
      fields = `
        <div class="form-group">
          <label class="form-label" for="graduationYear">Graduation Year</label>
          <input type="text" id="graduationYear" name="batch" class="form-control" required>
        </div>
        <div class="form-group">
          <label class="form-label" for="department">Department</label>
          <input type="text" id="department" name="department" class="form-control" required>
        </div>
        <div class="form-group">
          <label class="form-label" for="company">Current Company</label>
          <input type="text" id="company" name="company" class="form-control">
        </div>
      `;
      break;
    case 'Student':
      fields = `
        <div class="form-group">
          <label class="form-label" for="year">Current Year</label>
          <select id="year" name="year" class="form-control" required>
            <option value="">Select Year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="department">Department</label>
          <input type="text" id="department" name="department" class="form-control" required>
        </div>
      `;
      break;
    case 'Faculty':
      fields = `
        <div class="form-group">
          <label class="form-label" for="department">Department</label>
          <input type="text" id="department" name="department" class="form-control" required>
        </div>
        <div class="form-group">
          <label class="form-label" for="position">Position</label>
          <input type="text" id="position" name="position" class="form-control" required>
        </div>
      `;
      break;
    case 'Employer':
      fields = `
        <div class="form-group">
          <label class="form-label" for="company">Company</label>
          <input type="text" id="company" name="company" class="form-control" required>
        </div>
        <div class="form-group">
          <label class="form-label" for="position">Position</label>
          <input type="text" id="position" name="position" class="form-control" required>
        </div>
        <div class="form-group">
          <label class="form-label" for="industry">Industry</label>
          <input type="text" id="industry" name="industry" class="form-control" required>
        </div>
      `;
      break;
  }
  
  container.innerHTML = fields;
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
}

function getMentorImage(mentorName) {
  const user = appData.users.find(u => u.name === mentorName);
  return user?.profileImage || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face';
}

function getMenteeImage(menteeName) {
  const user = appData.users.find(u => u.name === menteeName);
  return user?.profileImage || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face';
}