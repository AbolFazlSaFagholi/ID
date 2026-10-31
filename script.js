const byId = (id) => document.getElementById(id);

const introCard = byId("introCard");
const questionCard = byId("questionCard");
const resultCard = byId("resultCard");
const declinedCard = byId("declinedCard");

let noCount = 0;

const playfulQuestions = [
  {
    eyebrow: "سؤال شماره ۲",
    title: "عه، چرا نه؟ 🥺",
    text: "فقط یه سلام ساده‌ست؛ البته اگه خودت هم دوست داشته باشی!",
    face: "🥺",
    yes: "باشه، آیدی رو ببینم 💗"
  },
  {
    eyebrow: "هنوز ناامید نشدم!",
    title: "یه فرصت کوچولو نمی‌دی؟ 😄",
    text: "قول می‌دم پیام اولم فقط یه سلام محترمانه باشه!",
    face: "🙃",
    yes: "قبوله، بریم تلگرام"
  },
  {
    eyebrow: "سؤال مهم بعدی",
    title: "آیدی من که گاز نمی‌گیره! 😂",
    text: "شاید یه گفت‌وگوی خوب از همین‌جا شروع بشه.",
    face: "😅",
    yes: "خب باشه، نشون بده ❤️"
  },
  {
    eyebrow: "تلاش شماره ۴",
    title: "هنوز جوابت نه هست؟ 🙈",
    text: "اشکالی نداره؛ فقط خواستم یه بار دیگه بپرسم.",
    face: "🥹",
    yes: "باشه، آیدی رو بده"
  },
  {
    eyebrow: "یک سؤال دیگه",
    title: "حداقل کنجکاو نشدی؟ 😁",
    text: "شاید پشت این صفحه یه آدم خوش‌صحبت باشه!",
    face: "🤔",
    yes: "یک سلام بد نیست 💗"
  },
  {
    eyebrow: "مرحله بعدی",
    title: "دارم رکورد نه شنیدن می‌زنم! 😂",
    text: "ولی انتخاب با خودته؛ اگه مایل بودی آیدی اینجاست.",
    face: "🤣",
    yes: "باشه، آیدی رو ببینم"
  },
  {
    eyebrow: "آخرین سؤال‌های بامزه",
    title: "نظرت حتی یک ذره عوض نشد؟ 😅",
    text: "اگه دوست داشتی می‌تونی ارتباط بگیری؛ اگر نه هم کاملاً اوکیه.",
    face: "😇",
    yes: "آره، بریم تلگرام"
  }
];

byId("startBtn").addEventListener("click", () => {
  introCard.classList.add("hidden");
  questionCard.classList.remove("hidden");
});

byId("yesBtn").addEventListener("click", () => {
  questionCard.classList.add("hidden");
  resultCard.classList.remove("hidden");
  celebrate();
});

byId("noBtn").addEventListener("click", () => {
  noCount++;
  const item = playfulQuestions[(noCount - 1) % playfulQuestions.length];

  byId("questionEyebrow").textContent = item.eyebrow;
  byId("questionTitle").textContent = item.title;
  byId("questionText").textContent = item.text;
  byId("mascot").textContent = item.face;
  byId("yesBtn").querySelector("span").textContent = item.yes;
  byId("stepNumber").textContent = `${String(noCount + 1).padStart(2, "0")} / ??`;

  questionCard.animate(
    [{ transform: "translateY(5px)", opacity: .75 },
     { transform: "translateY(0)", opacity: 1 }],
    { duration: 320, easing: "ease-out" }
  );
});

byId("skipBtn").addEventListener("click", () => {
  questionCard.classList.add("hidden");
  declinedCard.classList.remove("hidden");
});

byId("restartBtn").addEventListener("click", () => {
  noCount = 0;
  byId("questionEyebrow").textContent = "یه درخواست کوچولو";
  byId("questionTitle").textContent = "دوست داری توی تلگرام در ارتباط باشیم؟";
  byId("questionText").textContent = "اگه مایل بودی، آیدی من اینجاست تا راحت پیدام کنی. 😊";
  byId("mascot").textContent = "🥹";
  byId("yesBtn").querySelector("span").textContent = "آره، چرا که نه؟ 💗";
  byId("stepNumber").textContent = "01 / 02";
  declinedCard.classList.add("hidden");
  introCard.classList.remove("hidden");
});

byId("copyBtn").addEventListener("click", async () => {
  const note = byId("copyNote");
  try {
    await navigator.clipboard.writeText("@KhodeDreaM");
    note.textContent = "آیدی کپی شد! 💗";
  } catch {
    note.textContent = "کپی خودکار در این مرورگر در دسترس نیست؛ آیدی را از بالا کپی کن.";
  }
});

const music = byId("bgMusic");
const musicBtn = byId("musicBtn");
const musicIcon = byId("musicIcon");

musicBtn.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicBtn.classList.add("playing");
      musicIcon.textContent = "Ⅱ";
    } catch {
      musicIcon.textContent = "♫";
      musicBtn.title = "فایل music.mp3 را کنار index.html قرار بده.";
    }
  } else {
    music.pause();
    musicBtn.classList.remove("playing");
    musicIcon.textContent = "♫";
  }
});

function makeSpark() {
  const node = document.createElement("span");
  node.className = "spark";
  node.textContent = ["♡", "✦", "✧", "·"][Math.floor(Math.random() * 4)];
  node.style.left = `${Math.random() * 100}%`;
  node.style.fontSize = `${12 + Math.random() * 18}px`;
  node.style.animationDuration = `${6 + Math.random() * 5}s`;
  byId("sparkles").appendChild(node);
  setTimeout(() => node.remove(), 11000);
}
setInterval(makeSpark, 850);

function celebrate() {
  const symbols = ["♡", "✦", "💗", "✨"];
  for (let i = 0; i < 32; i++) {
    const node = document.createElement("span");
    node.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    node.style.cssText = `position:fixed;left:${Math.random()*100}vw;top:-25px;z-index:5;color:#e77eaa;font-size:${14+Math.random()*16}px;pointer-events:none`;
    document.body.appendChild(node);
    const duration = 2200 + Math.random() * 1800;
    node.animate(
      [{ transform: "translateY(0) rotate(0)", opacity: 1 },
       { transform: `translateY(110vh) rotate(${Math.random()*360}deg)`, opacity: 0 }],
      { duration, easing: "linear" }
    );
    setTimeout(() => node.remove(), duration);
  }
}
