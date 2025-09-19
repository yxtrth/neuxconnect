import plotly.graph_objects as go
import plotly.express as px

# Define the data
data = [
  {
    "category": "User Base",
    "metrics": [
      {"name": "Alumni", "value": 5420, "change": "+12%"},
      {"name": "Students", "value": 2340, "change": "+8%"}, 
      {"name": "Faculty", "value": 156, "change": "+3%"},
      {"name": "Active Users", "value": 1230, "change": "+15%"}
    ]
  },
  {
    "category": "Platform Activity",
    "metrics": [
      {"name": "Events", "value": 12, "change": "+25%"},
      {"name": "Job Postings", "value": 45, "change": "+18%"},
      {"name": "Mentorships", "value": 89, "change": "+22%"},
      {"name": "Forum Posts", "value": 234, "change": "+35%"}
    ]
  },
  {
    "category": "Fundraising",
    "metrics": [
      {"name": "Total Raised", "value": 234500, "change": "+42%"},
      {"name": "Campaigns", "value": 8, "change": "+33%"},
      {"name": "Avg Donation", "value": 267, "change": "+8%"},
      {"name": "Retention Rate", "value": 68, "change": "+5%"}
    ]
  },
  {
    "category": "Career Success", 
    "metrics": [
      {"name": "Placement Rate", "value": 85, "change": "+7%"},
      {"name": "Salary Growth", "value": 23, "change": "+12%"},
      {"name": "Leaders", "value": 156, "change": "+18%"},
      {"name": "Mentorships", "value": 245, "change": "+28%"}
    ]
  }
]

# Brand colors
colors = ['#1FB8CD', '#DB4545', '#2E8B57', '#5D878F']

# Create comprehensive growth metrics chart
fig = go.Figure()

# Process all categories and metrics
for i, category_data in enumerate(data):
    category = category_data["category"]
    
    # Truncate category name for legend
    cat_name = category
    if len(cat_name) > 15:
        cat_name = cat_name[:12] + "..."
    
    metric_names = []
    growth_values = []
    hover_texts = []
    
    for metric in category_data["metrics"]:
        # Truncate metric names to 15 characters
        name = metric["name"]
        if len(name) > 15:
            name = name[:12] + "..."
        metric_names.append(name)
        
        # Extract growth percentage
        change_str = metric["change"].replace("+", "").replace("%", "")
        growth_values.append(float(change_str))
        
        # Format value for hover
        value = metric["value"]
        if value >= 1000000:
            formatted_value = f"{value/1000000:.1f}m"
        elif value >= 1000:
            formatted_value = f"{value/1000:.1f}k"
        else:
            formatted_value = str(value)
            
        hover_texts.append(f"{metric['name']}<br>Value: {formatted_value}<br>Growth: {metric['change']}")
    
    # Add trace for this category
    fig.add_trace(go.Bar(
        name=cat_name,
        x=metric_names,
        y=growth_values,
        marker_color=colors[i],
        hovertemplate='%{hovertext}<extra></extra>',
        hovertext=hover_texts,
        cliponaxis=False
    ))

# Update layout
fig.update_layout(
    title="NeuxConnect Growth Analytics Dashboard",
    xaxis_title="Metrics",
    yaxis_title="Growth Rate (%)",
    barmode='group',
    legend=dict(orientation='h', yanchor='bottom', y=1.05, xanchor='center', x=0.5)
)

# Update y-axis to show percentage
fig.update_yaxes(ticksuffix="%")

fig.update_traces(cliponaxis=False)

# Save as both PNG and SVG
fig.write_image("dashboard.png")
fig.write_image("dashboard.svg", format="svg")

print("Comprehensive growth analytics dashboard created successfully!")