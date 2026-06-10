// ======================
// 题目数据
// 图片命名规则：
// images/duck(1).jpg
// images/goose(1).jpg
// ======================

const imageCache = {};

const questions = [
  {
    img: "https://ci.xiaohongshu.com/notes_pre_post/1040g3k83217jfg0j7a005pbln9p86bitvckm78o?imageView2/format/webp",
    answer: "鹅腿",
    feedback: {
      correct: ["第一题就稳住了，有点鹅腿大师的苗头。", "这都能认出来，看来你不是普通路人。"],
      wrong: ["第一题就开始迷糊了，阿姨已经在微笑。", "鹅鸭在你眼里，可能主打一个平等。"]
    }
  },
  {
    img: "https://ci.xiaohongshu.com/note_pre_post_uhdr/1040g3r83217qn7sink704abias1lg8t5khulkno?imageView2/format/webp",
    answer: "鸭腿",
    feedback: {
      correct: ["鸭腿没骗过你，这波可以。", "不错，这只鸭腿没有成功伪装。"],
      wrong: ["这其实是鸭腿，阿姨看了直点头。", "你刚刚离鸭腿冤种又近了一步。"]
    }
  },
  {
    img: "https://ci.xiaohongshu.com/1040g2sg30rvj0r41io004a6uhalku3ip2ov66pg?imageView2/format/webp",
    answer: "鹅腿",
    feedback: {
      correct: ["鹅腿被你拿下，继续保持。", "这题答对，说明你确实吃出经验了。"],
      wrong: ["错啦，鹅腿都替你着急。", "你是不是只负责吃，不负责认？"]
    }
  },
  {
    img: "https://ci.xiaohongshu.com/note_pre_post_uhdr/1040g3r832183abedno005p7kcpf1meegeosvte0?imageView2/format/webp",
    answer: "鸭腿",
    feedback: {
      correct: ["鸭腿识别成功，眼神在线。", "这题没被套路，值得表扬。"],
      wrong: ["鸭腿又把你骗了。", "这波阿姨愿称你为潜在客户。"]
    }
  },
  {
    img: "https://ci.xiaohongshu.com/1040g2sg3217ko6i47ue05o4hc0k0bso8gomq478?imageView2/format/webp",
    answer: "鹅腿",
    feedback: {
      correct: ["不错，你已经开始有腿感了。", "鹅腿大师预备役正在加载。"],
      wrong: ["鹅腿都这么明显了，你还犹豫？", "这题错得很有生活气息。"]
    }
  },
  {
    img: "https://ci.xiaohongshu.com/notes_pre_post/1040g3k831l9i1742le705n22rau1p25l7id3hn8?imageView2/format/webp",
    answer: "鸭腿",
    feedback: {
      correct: ["鸭腿被你识破了。", "这题稳，阿姨的套路没生效。"],
      wrong: ["又错啦，鸭腿正在偷笑。", "你这个判断，鸭腿听了都感动。"]
    }
  },
  {
    img: "https://ci.xiaohongshu.com/note_pre_post_uhdr/1040g3r83217sdml4n00g5oum5a79ie5uoe1qq20?imageView2/format/webp",
    answer: "鹅腿",
    feedback: {
      correct: ["行，这题有点大师气质。", "鹅腿认证通过。"],
      wrong: ["鹅腿被你认成鸭腿，鹅表示不服。", "看来你平时真的只顾着香了。"]
    }
  },
  {
    img: "https://ci.xiaohongshu.com/notes_pre_post/1040g3k831ipubpolhedg5or6h8v7rb5l1srur5g?imageView2/format/webp",
    answer: "鸭腿",
    feedback: {
      correct: ["这只鸭腿逃不过你的眼睛。", "你已经不是当年的鸭腿冤种了。"],
      wrong: ["错啦，这题是鸭腿。", "阿姨：这个顾客我熟。"]
    }
  },
  {
    img: "https://ci.xiaohongshu.com/notes_uhdr/1040g3qg3217jemvf7o0g5q4ap8pa6v1a0i8erfg?imageView2/format/webp",
    answer: "鹅腿",
    feedback: {
      correct: ["这波像高手。", "鹅腿大师之路又进了一步。"],
      wrong: ["鹅腿：我都这么努力了。", "你离满分越来越远，离阿姨越来越近。"]
    }
  },
  {
    img: "https://ci.xiaohongshu.com/1040g00830ue1881hl8004ajdoiputscbs7vme9o?imageView2/format/webp",
    answer: "鸭腿",
    feedback: {
      correct: ["鸭腿 again，认对了。", "可以，你没被这只鸭腿拿下。"],
      wrong: ["鸭腿：谢谢你的信任。", "这题错得很适合发朋友圈。"]
    }
  },
  {
    img: "https://ci.xiaohongshu.com/1040g008320pih0m55m404bul3lpkvf6lbaudaeg?imageView2/format/webp",
    answer: "鹅腿",
    feedback: {
      correct: ["最后阶段还能稳住，厉害。", "你已经接近鹅腿大师了。"],
      wrong: ["快结束了还被套路，节目效果有了。", "鹅腿表示：我真的不是鸭腿。"]
    }
  },
  {
    img: "https://ci.xiaohongshu.com/notes_pre_post/1040g3k83217un7fk7u705pd6gbai4ds2js7ahao?imageView2/format/webp",
    answer: "鸭腿",
    feedback: {
      correct: ["收官题拿下，漂亮。", "这题答对，结果页可以体面一点。"],
      wrong: ["最后一题也错，阿姨正在鼓掌。", "结局已定，鸭腿冤种浓度上升。"]
    }
  }
];

// ======================
// DOM
// ======================

const startPage = document.getElementById("start-page");
const questionPage = document.getElementById("question-page");
const resultPage = document.getElementById("result-page");

const startBtn = document.getElementById("start-btn");

const questionImg = document.getElementById("question-img");
const questionIndex = document.getElementById("question-index");
const questionTotal = document.getElementById("question-total");
const liveScore = document.getElementById("live-score");
const progressInner = document.getElementById("progress-inner");
const feedbackEl = document.getElementById("feedback");
const optionButtons = document.querySelectorAll(".option-btn");

const resultBg = document.getElementById("result-bg");
const finalScoreEl = document.getElementById("final-score");
const resultSummary = document.getElementById("result-summary");

const saveBtn = document.getElementById("save-btn");
const shareBtn = document.getElementById("share-btn");
const restartBtn = document.getElementById("restart-btn");
const shareCard = document.getElementById("share-card");

const posterModal = document.getElementById("poster-modal");
const posterPreview = document.getElementById("poster-preview");
const closeModalBtn = document.getElementById("close-modal-btn");

const toast = document.getElementById("toast");

// ======================
// 状态
// ======================

let currentQuestion = 0;
let score = 0;
let locked = false;
let lastPosterBlob = null;
let lastPosterFile = null;

// ======================
// 初始化
// ======================

questionTotal.innerText = `共 ${questions.length} 题`;

startBtn.addEventListener("click", startGame);

optionButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (locked) return;
    answerQuestion(btn.dataset.answer, btn);
  });
});

saveBtn.addEventListener("click", async () => {
  const result = await generatePosterBlob();

  if (!result) {
    showToast("结果图生成失败，请稍后再试");
    return;
  }

  const { blob, dataUrl } = result;
  lastPosterBlob = blob;
  lastPosterFile = new File([blob], `鹅鸭腿鉴定结果-${score}分.png`, {
    type: "image/png"
  });

  // PC / 部分安卓浏览器可直接下载
  const downloaded = tryDownloadBlob(blob, `鹅鸭腿鉴定结果-${score}分.png`);

  // 手机微信/部分浏览器下载不稳定，直接展示预览，长按保存
  posterPreview.src = dataUrl;
  posterModal.classList.add("show");

  if (downloaded) {
    showToast("结果图已生成，也可以长按图片保存");
  } else {
    showToast("长按图片即可保存结果图");
  }
});

shareBtn.addEventListener("click", async () => {
  const result = await generatePosterBlob();

  if (!result) {
    showToast("分享图生成失败，请稍后再试");
    return;
  }

  const { blob, dataUrl } = result;
  const file = new File([blob], `鹅鸭腿鉴定结果-${score}分.png`, {
    type: "image/png"
  });

  lastPosterBlob = blob;
  lastPosterFile = file;

  // 支持 Web Share API 的浏览器，直接分享图片
  if (
    navigator.share &&
    navigator.canShare &&
    navigator.canShare({ files: [file] })
  ) {
    try {
      await navigator.share({
        title: "你是鹅腿大师还是鸭腿冤种？",
        text: `我在鹅鸭腿鉴定局得了 ${score} / ${questions.length}，你也来试试。`,
        files: [file]
      });
      return;
    } catch (err) {
      showToast("已取消分享");
      return;
    }
  }

  // 不支持直接分享文件时，展示图片给用户长按保存/转发
  posterPreview.src = dataUrl;
  posterModal.classList.add("show");
  showToast("当前浏览器不支持直接分享，请长按图片保存后发送");
});

restartBtn.addEventListener("click", () => {
  resultPage.classList.remove("active");
  startPage.classList.add("active");
});

closeModalBtn.addEventListener("click", () => {
  posterModal.classList.remove("show");
});

posterModal.addEventListener("click", (event) => {
  if (event.target.classList.contains("poster-modal-mask")) {
    posterModal.classList.remove("show");
  }
});

// ======================
// 游戏流程
// ======================

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

async function startGame() {
  shuffle(questions);
  currentQuestion = 0;
  score = 0;
  locked = false;

  startPage.classList.remove("active");
  resultPage.classList.remove("active");
  questionPage.classList.add("active");

  showQuestion();
}

function loadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();

    // 对小红书/外链图片，尝试不带 Referer
    img.referrerPolicy = "no-referrer";

    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);

    img.src = src;
  });
}

async function showQuestion() {
  locked = true;

  const q = questions[currentQuestion];
  const next = questions[currentQuestion + 1];

  questionIndex.innerText = `第 ${currentQuestion + 1} 题`;
  liveScore.innerText = `已答对 ${score} 题`;

  const progress = (currentQuestion / questions.length) * 100;
  progressInner.style.width = `${progress}%`;

  feedbackEl.innerText = "图片加载中...";
  questionImg.classList.add("loading");

  optionButtons.forEach((btn) => {
    btn.disabled = true;
    btn.classList.remove("correct", "wrong");
  });

  // 等 img 标签加载完
  await new Promise((resolve) => {
    questionImg.onload = resolve;
    questionImg.onerror = resolve;
    questionImg.referrerPolicy = "no-referrer";
    questionImg.src = q.img;
  });

  questionImg.classList.remove("loading");
  feedbackEl.innerText = "别犹豫，凭第一感觉选。";

  optionButtons.forEach((btn) => {
    btn.disabled = false;
  });

  locked = false;
}

function answerQuestion(selected, clickedButton) {
  locked = true;

  const q = questions[currentQuestion];
  const isCorrect = selected === q.answer;

  if (isCorrect) {
    score++;
    clickedButton.classList.add("correct");
  } else {
    clickedButton.classList.add("wrong");

    optionButtons.forEach((btn) => {
      if (btn.dataset.answer === q.answer) {
        btn.classList.add("correct");
      }
    });
  }

  optionButtons.forEach((btn) => {
    btn.disabled = true;
  });

  const pool = isCorrect ? q.feedback.correct : q.feedback.wrong;
  feedbackEl.innerText = pool[Math.floor(Math.random() * pool.length)];

  currentQuestion++;
  progressInner.style.width = `${(currentQuestion / questions.length) * 100}%`;
  liveScore.innerText = `已答对 ${score} 题`;

  setTimeout(() => {
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 900);
}

// ======================
// 结果配置
// ======================

const RESULT_IMAGES = {
  low: "assets/results/result-low.png",
  midlow: "assets/results/result-midlow.png",
  mid: "assets/results/result-mid.png",
  high: "assets/results/result-high.png",
  perfect: "assets/results/result-perfect.png"
};

function getResultImage(score) {
  if (score <= 3) return RESULT_IMAGES.low;
  if (score <= 6) return RESULT_IMAGES.midlow;
  if (score <= 9) return RESULT_IMAGES.mid;
  if (score <= 11) return RESULT_IMAGES.high;
  return RESULT_IMAGES.perfect;
}

function showResult() {
  questionPage.classList.remove("active");
  resultPage.classList.add("active");

  const resultImage = getResultImage(score);

  resultBg.onload = () => {
    console.log("结果图加载成功：", resultImage);
  };

  resultBg.onerror = () => {
    console.error("结果图加载失败：", resultImage);
    showToast(`结果图加载失败：${resultImage}`);
  };

  resultBg.src = resultImage;

  const scoreText = `${score} / ${questions.length}`;
  finalScoreEl.innerText = scoreText;
  // resultSummary.innerText = scoreText;

  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 30);
}

// ======================
// 生成 / 保存 / 分享海报
// ======================

async function generatePosterBlob() {
  await waitForImageLoaded(resultBg);

  // 等字体和布局稳定
  if (document.fonts && document.fonts.ready) {
    await document.fonts.ready;
  }

  await delay(80);

  try {
    const canvas = await html2canvas(shareCard, {
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      scale: Math.min(window.devicePixelRatio || 2, 3),
      logging: false
    });

    const dataUrl = canvas.toDataURL("image/png");

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          resolve(null);
          return;
        }

        resolve({
          blob,
          dataUrl
        });
      }, "image/png");
    });
  } catch (error) {
    console.error("生成海报失败：", error);
    return null;
  }
}

function tryDownloadBlob(blob, filename) {
  try {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = filename;
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => URL.revokeObjectURL(url), 1000);

    return true;
  } catch (error) {
    console.warn("直接下载失败：", error);
    return false;
  }
}

function waitForImageLoaded(img) {
  return new Promise((resolve) => {
    if (img.complete && img.naturalWidth > 0) {
      resolve();
      return;
    }

    img.onload = () => resolve();
    img.onerror = () => resolve();
  });
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ======================
// Toast
// ======================

let toastTimer = null;

function showToast(message) {
  toast.innerText = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}