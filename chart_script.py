import plotly.graph_objects as go
import plotly.express as px
import json

# Data for the architecture layers with exact colors from provided data
layers_data = [
  {
    "layer": "Frontend",
    "components": ["Next.js 15", "TypeScript", "Tailwind CSS", "shadcn/ui", "Zustand"],
    "color": "#1FB8CD"
  },
  {
    "layer": "Authentication", 
    "components": ["NextAuth.js", "JWT Tokens", "RBAC System", "OAuth Login", "Sessions"],
    "color": "#DB4545"
  },
  {
    "layer": "API Routes",
    "components": ["User Mgmt", "Events", "Jobs", "Mentorship", "Fundraising", "Analytics"],
    "color": "#2E8B57"
  },
  {
    "layer": "Search Engine",
    "components": ["Elasticsearch", "AI Search", "NLP Engine", "Full-Text", "Filters"],
    "color": "#5D878F"
  },
  {
    "layer": "Database",
    "components": ["PostgreSQL", "Prisma ORM", "User Data", "Events", "Jobs", "Analytics"],
    "color": "#D2BA4C"
  },
  {
    "layer": "External Services",
    "components": ["Stripe Pay", "SendGrid", "AWS S3", "Push Notify", "Tracking"],
    "color": "#B4413C"
  }
]

# Create figure
fig = go.Figure()

# Define positions for each layer with better spacing
layer_positions = {
    "Frontend": 6,
    "Authentication": 5, 
    "API Routes": 4,
    "Search Engine": 2.5,
    "Database": 1.5,
    "External Services": 1.5
}

# Add main architecture layers with improved spacing
for i, layer_data in enumerate(layers_data):
    layer_name = layer_data["layer"]
    components = layer_data["components"]
    color = layer_data["color"]
    y_pos = layer_positions[layer_name]
    
    # Position external services and database side by side
    if layer_name == "External Services":
        x_start, x_end = 8, 15
    elif layer_name == "Database":
        x_start, x_end = 0, 7
    else:
        x_start, x_end = 0, 15
    
    # Add layer background
    fig.add_shape(
        type="rect",
        x0=x_start, y0=y_pos-0.5, x1=x_end, y1=y_pos+0.5,
        line=dict(color=color, width=2),
        fillcolor=color,
        opacity=0.1
    )
    
    # Layer titles
    layer_titles = {
        "Frontend": "Frontend Layer",
        "Authentication": "Auth & RBAC", 
        "API Routes": "API Layer",
        "Search Engine": "Search Engine",
        "Database": "Database Layer",
        "External Services": "External APIs"
    }
    
    # Add layer title
    fig.add_annotation(
        x=x_start + 0.5, y=y_pos + 0.35,
        text=f"<b>{layer_titles[layer_name]}</b>",
        showarrow=False,
        font=dict(size=14, color=color),
        xanchor="left"
    )
    
    # Add components with better spacing
    comp_width = (x_end - x_start - 1) / len(components)
    for j, component in enumerate(components):
        x_pos = x_start + 0.5 + (j * comp_width) + comp_width/2
        
        # Component box
        fig.add_shape(
            type="rect",
            x0=x_pos-comp_width/2+0.1, y0=y_pos-0.2, 
            x1=x_pos+comp_width/2-0.1, y1=y_pos+0.2,
            line=dict(color=color, width=1),
            fillcolor="white",
            opacity=0.9
        )
        
        # Component label
        fig.add_annotation(
            x=x_pos, y=y_pos,
            text=component,
            showarrow=False,
            font=dict(size=10),
            xanchor="center"
        )

# Add role-based access control emphasis in auth layer
roles = ["Alumni", "Student", "Faculty", "Employer", "Admin"]
for i, role in enumerate(roles):
    fig.add_shape(
        type="circle",
        x0=11 + i*0.8, y0=4.7, x1=11.3 + i*0.8, y1=5.0,
        line=dict(color="#DB4545", width=1),
        fillcolor="#DB4545",
        opacity=0.2
    )
    fig.add_annotation(
        x=11.15 + i*0.8, y=4.85,
        text=role[:1],  # First letter only
        showarrow=False,
        font=dict(size=10, color="#DB4545"),
        xanchor="center"
    )

# Add comprehensive data flow arrows
flow_arrows = [
    # Main user flow
    {"start": (7.5, 5.5), "end": (7.5, 5.5), "color": "#333", "label": "User Request", "x_label": 8.5},
    {"start": (7.5, 4.5), "end": (7.5, 4.5), "color": "#333", "label": "Auth & Route", "x_label": 8.5},
    
    # API to services flows
    {"start": (3, 3.5), "end": (3, 3), "color": "#2E8B57", "label": "Search Query", "x_label": 4},
    {"start": (7, 3.5), "end": (7, 2), "color": "#2E8B57", "label": "Data CRUD", "x_label": 8},
    {"start": (10, 3.5), "end": (10, 2), "color": "#2E8B57", "label": "External API", "x_label": 11},
    
    # Search to database
    {"start": (5, 2.5), "end": (5, 2), "color": "#5D878F", "label": "Index Sync", "x_label": 6},
]

# Add vertical flow arrows between layers
vertical_flows = [
    {"x": 7.5, "y1": 5.5, "y2": 4.5, "label": "Auth Check"},
    {"x": 7.5, "y1": 4.5, "y2": 3.5, "label": "Route API"},
    {"x": 3.5, "y1": 3.5, "y2": 3, "label": "Search"},
    {"x": 3.5, "y1": 3.5, "y2": 2, "label": "Query DB"},
    {"x": 11, "y1": 3.5, "y2": 2, "label": "Ext Call"},
]

for flow in vertical_flows:
    # Add arrow
    fig.add_annotation(
        x=flow["x"], y=flow["y1"],
        ax=flow["x"], ay=flow["y2"],
        arrowhead=2,
        arrowsize=1.5,
        arrowwidth=2,
        arrowcolor="#666666",
        showarrow=True
    )
    
    # Add label
    mid_y = (flow["y1"] + flow["y2"]) / 2
    fig.add_annotation(
        x=flow["x"] + 0.8, y=mid_y,
        text=flow["label"],
        showarrow=False,
        font=dict(size=9, color="#666666"),
        xanchor="left",
        bgcolor="rgba(255,255,255,0.9)",
        bordercolor="#cccccc",
        borderwidth=1
    )

# Add bidirectional arrows for real-time sync
fig.add_annotation(
    x=1.5, y=2.5,
    ax=1.5, ay=2,
    arrowhead=2,
    arrowsize=1,
    arrowwidth=2,
    arrowcolor="#5D878F",
    showarrow=True
)

fig.add_annotation(
    x=1.2, y=2,
    ax=1.2, ay=2.5,
    arrowhead=2,
    arrowsize=1,
    arrowwidth=2,
    arrowcolor="#5D878F",
    showarrow=True
)

fig.add_annotation(
    x=0.5, y=2.25,
    text="Sync",
    showarrow=False,
    font=dict(size=9, color="#5D878F"),
    xanchor="center",
    bgcolor="rgba(255,255,255,0.9)",
    bordercolor="#5D878F",
    borderwidth=1
)

# Add data flow legend
legend_items = [
    {"color": "#666666", "label": "Data Flow", "y": 0.8},
    {"color": "#5D878F", "label": "Search Sync", "y": 0.6},
    {"color": "#DB4545", "label": "Auth Control", "y": 0.4}
]

for item in legend_items:
    fig.add_shape(
        type="line",
        x0=12.5, y0=item["y"], x1=13.5, y1=item["y"],
        line=dict(color=item["color"], width=3)
    )
    fig.add_annotation(
        x=13.7, y=item["y"],
        text=item["label"],
        showarrow=False,
        font=dict(size=10),
        xanchor="left"
    )

fig.add_annotation(
    x=13, y=1,
    text="<b>Flow Legend</b>",
    showarrow=False,
    font=dict(size=12),
    xanchor="center"
)

# Update layout with better spacing
fig.update_layout(
    title="NeuxConnect Architecture",
    showlegend=False,
    xaxis=dict(
        range=[-0.5, 16],
        showgrid=False,
        showticklabels=False,
        zeroline=False
    ),
    yaxis=dict(
        range=[0, 7],
        showgrid=False,
        showticklabels=False,
        zeroline=False
    ),
    plot_bgcolor='white'
)

fig.update_traces(cliponaxis=False)

# Save the chart as both PNG and SVG
fig.write_image("architecture_diagram.png")
fig.write_image("architecture_diagram.svg", format="svg")

fig.show()