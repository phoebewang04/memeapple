export function createOverviewContent() {
    const content = `
      五年前，成都醫院因連環失蹤案而成為禁地，身為菁英偵探的你，收到神秘委託，必須調查此宗懸案，隨著你步入醫院，腐朽的氣息和幽暗的走廊讓人不寒而慄。這裡的每一個角落似乎都隱藏著難以解釋的秘密…
    `;
  
    const overviewText = document.createElement('p');
    overviewText.classList.add('overview_text');
    overviewText.textContent = content;
  
    return overviewText;
  }
  
  export function createProgressBars() {
    const progressBars = `
      <div class="theme_number hospital">
        <span>燒腦指數</span>
        <div class="progress_bar hospital">
          <div class="progress hospital" style="width: 87%;">87%</div>
        </div>
        <span>驚嚇指數</span>
        <div class="progress_bar hospital">
          <div class="progress hospital" style="width: 95%;">95%</div>
        </div>
        <span>推薦指數</span>
        <div class="progress_bar hospital">
          <div class="progress hospital" style="width: 90%;">90%</div>
        </div>
      </div>
    `;
  
    const progressBarsWrapper = document.createElement('div');
    progressBarsWrapper.innerHTML = progressBars;
  
    return progressBarsWrapper;
  }
  