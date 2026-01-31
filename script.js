<script>
  const steps = [
    {
      q: "What best describes your team or organization?",
      options: ["Startup", "Scaleup", "Innovation team", "Business development"]
    },
    {
      q: "What is your main ambition right now?",
      options: ["Grow faster", "Find focus", "Align the team", "Explore new directions"]
    },
    {
      q: "If things go well, what should be true in 12–24 months?",
      options: ["Clear strategy", "Stronger execution", "New business model", "Scalable growth"]
    },
    {
      q: "What matters most to get right?",
      options: ["Priorities", "Ownership", "Speed", "Quality"]
    },
    {
      q: "What is the biggest obstacle today?",
      options: ["Too many initiatives", "Unclear direction", "Lack of resources", "Low alignment"]
    },
    {
      q: "What other obstacles are slowing you down?",
      options: ["Decision-making", "Communication", "Processes", "Capabilities"]
    },
    {
      q: "What is already in motion?",
      options: ["Ongoing initiatives", "Experiments", "Internal change", "Nothing yet"]
    },
    {
      q: "What feels unclear or risky?",
      options: ["Market", "Execution", "Team", "Timing"]
    },
    {
      q: "What would success make possible next?",
      options: ["Scale", "Invest", "Expand", "Refocus"]
    }
  ];

  let step = 0;
  const answers = [];

  const qEl = document.getElementById("question");
  const pEl = document.getElementById("progress");
  const preview = document.getElementById("preview");
  const left = document.querySelector(".left");

  function render() {
    pEl.textContent = `${step + 1} / ${steps.length}`;
    qEl.textContent = steps[step].q;

    const buttons = steps[step].options
      .map(
        opt => `<button class="option-btn">${opt}</button>`
      )
      .join("");

    left.querySelectorAll(".option-btn").forEach(b => b.remove());
    qEl.insertAdjacentHTML("afterend", `<div class="options">${buttons}</div>`);

    document.querySelectorAll(".option-btn").forEach(btn => {
      btn.onclick = () => {
        answers[step] = btn.textContent;
        step++;
        if (step < steps.length) {
          render();
        } else {
          showResult();
        }
      };
    });

    renderPreview();
  }

  function renderPreview() {
    preview.innerHTML = answers
      .map((a, i) => `<div class="card"><strong>${i + 1}</strong> · ${a}</div>`)
      .join("") || `<div class="placeholder">Your visual structure appears here.</div>`;
  }

  function showResult() {
    qEl.textContent = "Done.";
    document.querySelector(".options").remove();
    pEl.textContent = "Result";
    renderPreview();
  }

  render();
</script>
