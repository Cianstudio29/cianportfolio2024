// 初始化 GSAP 動畫時間線
const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.3 }); // 動畫循環

// 動畫順序設置
tl.to("#circle", {
  duration: 0.7, // 收縮速率
  attr: { r: 0 }, // 圓形收縮至圓心
  ease: "power2.in",
})
  .set("#circle", { visibility: "hidden" }) // 隱藏圓形
  .set("#explosion", {
    visibility: "visible",
    scale: 0.2, // 初始化爆炸圖縮小至 20%
    transformOrigin: "center center", // 以中心點縮放
  })
  .to("#explosion", {
    duration: 1, // 爆炸擴張速率
    scale: 0.9, // 擴大至 90%
    ease: "elastic.out(1, 0.5)",
  })
  .to("#explosion", {
    duration: 0.7, // 收縮速率
    scale: 0.2, // 縮回至 20%
    ease: "power2.in",
  })
  .set("#explosion", { visibility: "hidden" }) // 隱藏爆炸形狀
  .set("#circle", { visibility: "visible" }) // 恢復圓形
  .to("#circle", {
    duration: 1, // 圓形恢復速率
    attr: { r: 120 }, // 恢復原始大小
    ease: "elastic.out(1, 0.5)",
  });
