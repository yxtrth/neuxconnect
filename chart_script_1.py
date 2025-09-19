import plotly.graph_objects as go
import plotly.express as px
import pandas as pd
import numpy as np

# Define the data
data = [
    {
        "role": "Alumni",
        "permissions": {
            "Profile Mgmt": "Full",
            "Global Search": "Full",
            "Event Mgmt": "Create/RSVP",
            "Job Postings": "View/Apply",
            "Mentorship": "Full",
            "Fundraising": "Donate/Create",
            "Analytics": "Personal Only",
            "User Mgmt": "None",
            "Communication": "Peer-to-Peer",
            "Database": "Limited"
        }
    },
    {
        "role": "Student", 
        "permissions": {
            "Profile Mgmt": "Full",
            "Global Search": "Full",
            "Event Mgmt": "View/RSVP",
            "Job Postings": "View/Apply",
            "Mentorship": "Request Only",
            "Fundraising": "Donate Only",
            "Analytics": "Personal Only",
            "User Mgmt": "None",
            "Communication": "Forum/Chat",
            "Database": "Limited"
        }
    },
    {
        "role": "Faculty",
        "permissions": {
            "Profile Mgmt": "Full",
            "Global Search": "Full",
            "Event Mgmt": "Create/Manage",
            "Job Postings": "Post/Manage",
            "Mentorship": "Coordinate",
            "Fundraising": "View/Support",
            "Analytics": "Department",
            "User Mgmt": "Dept Only",
            "Communication": "Broadcast",
            "Database": "Alumni DB"
        }
    },
    {
        "role": "Employer",
        "permissions": {
            "Profile Mgmt": "Company Prof",
            "Global Search": "Talent Search",
            "Event Mgmt": "Recruitment",
            "Job Postings": "Full Mgmt",
            "Mentorship": "Limited",
            "Fundraising": "Corporate",
            "Analytics": "Hiring Met",
            "User Mgmt": "None",
            "Communication": "Direct Cont",
            "Database": "Candidate"
        }
    },
    {
        "role": "Admin",
        "permissions": {
            "Profile Mgmt": "All Users",
            "Global Search": "Full Access",
            "Event Mgmt": "Full Control",
            "Job Postings": "Approve/Mgmt",
            "Mentorship": "Full Oversght",
            "Fundraising": "Full Mgmt",
            "Analytics": "System-wide",
            "User Mgmt": "Full Control",
            "Communication": "System-wide",
            "Database": "Complete"
        }
    }
]

# Map permission descriptions to access levels
# 3 = Full Access (Green), 2 = Limited Access (Orange), 1 = Read Only (Yellow), 0 = No Access (Red)
access_mapping = {
    # Full Access (3)
    "Full": 3, "Full Access": 3, "Full Control": 3, "Full Mgmt": 3, "Full Management": 3,
    "All Users": 3, "Create/RSVP": 3, "Create/Manage": 3, "Post/Manage": 3, "Coordinate": 3,
    "Broadcast": 3, "Approve/Mgmt": 3, "Full Oversght": 3, "System-wide": 3, "Complete": 3,
    "Donate/Create": 3,
    
    # Limited Access (2)  
    "Limited": 2, "Personal Only": 2, "Dept Only": 2, "Department": 2, "Alumni DB": 2,
    "Company Prof": 2, "Talent Search": 2, "Recruitment": 2, "Corporate": 2, "Hiring Met": 2,
    "Direct Cont": 2, "Candidate": 2, "View/Apply": 2, "Request Only": 2, "Donate Only": 2,
    "Forum/Chat": 2, "Peer-to-Peer": 2,
    
    # Read Only (1)
    "View/RSVP": 1, "View/Support": 1,
    
    # No Access (0)
    "None": 0
}

# Create the matrix
roles = [item["role"] for item in data]
features = list(data[0]["permissions"].keys())

# Build the access matrix
access_matrix = []
hover_text = []

for role_data in data:
    role_access = []
    role_hover = []
    for feature in features:
        permission = role_data["permissions"][feature]
        access_level = access_mapping.get(permission, 2)  # Default to limited if not found
        role_access.append(access_level)
        role_hover.append(f"Role: {role_data['role']}<br>Feature: {feature}<br>Access: {permission}")
    access_matrix.append(role_access)
    hover_text.append(role_hover)

# Define custom colorscale using the specified brand colors
colorscale = [
    [0, '#DB4545'],    # Red - No Access
    [0.33, '#D2BA4C'], # Yellow - Read Only  
    [0.67, '#1FB8CD'], # Cyan - Limited Access
    [1, '#2E8B57']     # Green - Full Access
]

# Create the heatmap
fig = go.Figure(data=go.Heatmap(
    z=access_matrix,
    x=features,
    y=roles,
    hovertemplate='%{customdata}<extra></extra>',
    customdata=hover_text,
    colorscale=colorscale,
    showscale=True,
    colorbar=dict(
        title="Access Level",
        tickmode="array",
        tickvals=[0, 1, 2, 3],
        ticktext=["No Access", "Read Only", "Limited", "Full Access"]
    )
))

fig.update_layout(
    title="NeuxConnect RBAC Matrix",
    xaxis_title="Features",
    yaxis_title="User Roles"
)

fig.update_xaxes(side="bottom")
fig.update_yaxes(autorange="reversed")

# Save the chart
fig.write_image("chart.png")
fig.write_image("chart.svg", format="svg")

print("Chart saved successfully as both PNG and SVG")