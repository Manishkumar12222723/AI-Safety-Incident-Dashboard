
type Incident = {
    title: string;
    description: string;
    severity: "Low" | "Medium" | "High";
    date: string;
    expanded: boolean;
  };
  
  let incidents: Incident[] = [
    {
      title: "AI misclassified hospital patients",
      description: "An AI model assigned incorrect risk levels to patients.",
      severity: "High",
      date: "2024-12-01",
      expanded: false,
    },
    {
      title: "Bias in facial recognition",
      description: "The AI showed higher error rates for people of color.",
      severity: "Medium",
      date: "2025-01-10",
      expanded: false,
    }
  ];
  
  const listEl = document.getElementById("incidentList")!;
  const filterEl = document.getElementById("severityFilter") as HTMLSelectElement;
  const sortEl = document.getElementById("dateSort") as HTMLSelectElement;
  const form = document.getElementById("incidentForm") as HTMLFormElement;
  
  function renderList() {
    const severity = filterEl.value;
    const sort = sortEl.value;
  
    let filtered = incidents.filter(i => severity === "All" || i.severity === severity);
  
    filtered.sort((a, b) => {
      return sort === "newest"
        ? new Date(b.date).getTime() - new Date(a.date).getTime()
        : new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  
    listEl.innerHTML = "";
    filtered.forEach((incident, index) => {
      const div = document.createElement("div");
      div.className = "incident";
      div.innerHTML = `
        <strong>${incident.title}</strong> — ${incident.severity} — ${incident.date}
        <button onclick="toggleDetails(${index})">View Details</button>
        <div class="details" style="display: ${incident.expanded ? "block" : "none"}">
          ${incident.description}
        </div>
      `;
      listEl.appendChild(div);
    });
  }
  
  (window as any).toggleDetails = function(index: number) {
    incidents[index].expanded = !incidents[index].expanded;
    renderList();
  };
  
  form.addEventListener("submit", e => {
    e.preventDefault();
    const title = (document.getElementById("title") as HTMLInputElement).value.trim();
    const description = (document.getElementById("description") as HTMLTextAreaElement).value.trim();
    const severity = (document.getElementById("severity") as HTMLSelectElement).value as Incident["severity"];
  
    if (!title || !description || !severity) return;
  
    incidents.push({
      title,
      description,
      severity,
      date: new Date().toISOString().split("T")[0],
      expanded: false
    });
  
    form.reset();
    renderList();
  });
  
  filterEl.addEventListener("change", renderList);
  sortEl.addEventListener("change", renderList);
  
  renderList();
  

