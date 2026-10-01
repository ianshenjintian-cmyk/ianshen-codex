(() => {
  "use strict";
  const grid = document.querySelector("#work-grid");
  const dialog = document.querySelector("#work-dialog");
  const categoryLabels = { music: "MUSIC / 音乐作品", screen: "SCREEN / 影视项目", stage: "STAGE / 舞台与综艺" };
  let lastTrigger = null;
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  function createArt(work, category) {
    const art = element("div", `work-art${work.poster ? " poster" : ""}`);
    if (work.image) {
      const image = element("img");
      image.src = work.image;
      image.alt = `${work.title}${category === "music" ? "作品封面" : "项目海报"}`;
      image.width = 600;
      image.height = work.poster ? 750 : 600;
      image.loading = "lazy";
      art.append(image);
    } else {
      art.classList.add("type-art");
      art.append(element("span", "type-art-category", (categoryLabels[category] || categoryLabels.music).split(" / ")[0]), element("span", "type-art-title", work.title), element("span", "type-art-label", work.artist));
    }
    return art;
  }
  function showDetail(work, category, trigger) {
    lastTrigger = trigger;
    const art = document.querySelector("#detail-art");
    art.replaceChildren();
    if (work.image) {
      const img = element("img");
      img.src = work.image;
      img.alt = `${work.title}作品图片`;
      art.append(img);
    } else art.append(element("span", "type-art-title", work.title));
    document.querySelector("#detail-type").textContent = categoryLabels[category] || categoryLabels.music;
    document.querySelector("#detail-title").textContent = work.title;
    document.querySelector("#detail-artist").textContent = work.artist;
    document.querySelector("#detail-role").textContent = work.role;
    document.querySelector("#detail-description").textContent = work.description;
    document.querySelector("#detail-origin").textContent = `资料来源：${work.origin}`;
    const source = document.querySelector("#detail-source");
    source.hidden = !work.source;
    if (work.source) source.href = work.source;
    else source.removeAttribute("href");
    dialog.showModal();
    document.body.style.overflow = "hidden";
  }
  function renderWorks(category) {
    grid.replaceChildren();
    portfolioData[category].forEach((work, index) => {
      const button = element("button", "work-card");
      button.type = "button";
      button.setAttribute("aria-label", `${work.title}，${work.artist}，查看制作信息`);
      const art = createArt(work, category);
      art.append(element("span", "work-open", "制作信息"));
      const caption = element("div", "work-card-caption");
      caption.append(element("h3", "", work.title), element("span", "work-number", String(index + 1).padStart(2, "0")));
      button.append(art, caption, element("p", "work-card-artist", work.artist), element("p", "work-card-role", work.role));
      button.addEventListener("click", () => showDetail(work, category, button));
      grid.append(button);
    });
    document.querySelector("#work-announcement").textContent = `显示${categoryLabels[category].split(" / ")[1]}，共 ${portfolioData[category].length} 个项目。`;
    document.querySelector("#work-footnote").textContent = category === "music" ? "精选作品与岗位整理自个人履历及已核实的公开署名。" : "项目参与信息整理自个人履历；详细曲目与岗位可在合作沟通时进一步提供。";
  }
  document.querySelectorAll(".filter").forEach(button => {
    button.querySelector("span").textContent = String(portfolioData[button.dataset.filter].length).padStart(2, "0");
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach(item => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      renderWorks(button.dataset.filter);
    });
  });
  document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.style.overflow = "";
    if (lastTrigger?.isConnected) lastTrigger.focus({ preventScroll: true });
  });
  let copyTimer;
  document.querySelectorAll("[data-copy]").forEach(button => {
    button.addEventListener("click", async () => {
      const status = document.querySelector("#copy-status");
      try {
        if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(button.dataset.copy);
        else {
          const field = element("textarea");
          field.value = button.dataset.copy;
          field.style.position = "fixed";
          field.style.left = "-9999px";
          document.body.append(field);
          field.select();
          const copied = document.execCommand("copy");
          field.remove();
          button.focus({ preventScroll: true });
          if (!copied) throw new Error("复制不可用");
        }
        status.textContent = `已复制：${button.dataset.copy}`;
        button.textContent = "已复制";
        clearTimeout(copyTimer);
        copyTimer = setTimeout(() => {
          status.textContent = "";
          document.querySelectorAll("[data-copy]").forEach(item => { item.textContent = item.dataset.label; });
        }, 2500);
      } catch { status.textContent = `复制未完成，请手动复制：${button.dataset.copy}`; }
    });
  });
  document.querySelector("#year").textContent = String(new Date().getFullYear());
  portfolioData.featured.forEach(work => {
    const button = element("button", "featured-credit");
    button.type = "button";
    button.setAttribute("aria-label", `${work.title}，查看制作信息`);
    button.append(element("span", "", work.artist), element("strong", "", work.title), element("span", "featured-role", work.role));
    button.addEventListener("click", () => showDetail(work, "music", button));
    document.querySelector("#featured-credits").append(button);
  });
  renderWorks("music");
})();
