function ssg(setLocation) {
  /*

    設定

  */
  let prefix = `ssg-`
  let presetNumChar = 10
  /*

    文字セット

  */
  let char = {
    "日本語コード": {
      "標準": [`：`, `；`, `？`, `！`, `＿`, `〃`, `々`, `〆`, `―`, `／`, `～`, `♂`, `♀`, `＃`, `＆`, `＊`, `＠`, `§`, `◎`, `※`, `〒`, `†`, `‡`],
      "小さい文字": [`．`, `。`, `，`, `・`, `‐`, `’`, `”`, `“`, `°`, `′`, `″`],
      "かっこ": [`（`, `）`, `〔`, `〕`, `｛`, `｝`, `〈`, `〉`, `《`, `》`, `「`, `」`, `『`, `』`, `【`, `】`, `［`, `］`],
      "算術記号": [`＋`, `－`, `±`, `×`, `÷`, `＝`, `≠`, `＜`, `＞`, `≦`, `≧`, `∞`, `∴`, `∇`, `∵`],
      "単位": [`℃`, `￥`, `＄`, `￠`, `￡`, `％`, `Å`, `‰`],
      "塗りつぶし図形": [`●`, `◆`, `■`, `▲`, `▼`],
      "図形": [`☆`, `○`, `◇`, `□`, `△`, `▽`],
      "矢印": [`→`, `←`, `↑`, `↓`],
      "ギリシア文字（大文字）": [`Γ`, `Δ`, `Θ`, `Λ`, `Ξ`, `Π`, `Σ`, `Φ`, `Ψ`, `Ω`],
      "ギリシア文字（ローマ字に似た大文字）": [`Α`, `Β`, `Ε`, `Ζ`, `Η`, `Ι`, `Κ`, `Μ`, `Ν`, `Ο`, `Ρ`, `Τ`, `Υ`, `Χ`],
      "ギリシア文字（小文字）": [`α`, `β`, `γ`, `δ`, `ε`, `ζ`, `η`, `θ`, `ι`, `κ`, `λ`, `μ`, `ν`, `ξ`, `ο`, `π`, `ρ`, `σ`, `τ`, `υ`, `φ`, `χ`, `ψ`, `ω`]
    },
    "アラビア文字": {
      "単独形": [`ا`, `ب`, `ت`, `ث`, `ج`, `ح`, `خ`, `د`, `ذ`, `ر`, `ز`, `س`, `ش`, `ص`, `ض`, `ط`, `ظ`, `ع`, `غ`, `ف`, `ق`, `ك`, `ل`, `م`, `ن`, `ه`, `و`, `ي`],
    },
    "ジャワ文字": {
      "すべて": [`ꦀ`, `ꦁ`, `ꦂ`, `ꦃ`, `ꦄ`, `ꦅ`, `ꦆ`, `ꦇ`, `ꦈ`, `ꦉ`, `ꦊ`, `ꦋ`, `ꦌ`, `ꦍ`, `ꦎ`, `ꦏ`, `ꦐ`, `ꦑ`, `ꦒ`, `ꦓ`, `ꦔ`, `ꦕ`, `ꦖ`, `ꦗ`, `ꦘ`, `ꦙ`, `ꦚ`, `ꦛ`, `ꦜ`, `ꦝ`, `ꦞ`, `ꦟ`, `ꦠ`, `ꦡ`, `ꦢ`, `ꦣ`, `ꦤ`, `ꦥ`, `ꦦ`, `ꦧ`, `ꦨ`, `ꦩ`, `ꦪ`, `ꦫ`, `ꦬ`, `ꦭ`, `ꦮ`, `ꦯ`, `ꦰ`, `ꦱ`, `ꦲ`, `꦳`, `ꦴ`, `ꦵ`, `ꦶ`, `ꦷ`, `ꦸ`, `ꦹ`, `ꦺ`, `ꦻ`, `ꦼ`, `ꦽ`, `ꦾ`, `ꦿ`, `꧀`, `꧁`, `꧂`, `꧃`, `꧄`, `꧅`, `꧆`, `꧇`, `꧈`, `꧉`, `꧊`, `꧋`, `꧌`, `꧍`, `ꧏ`, `꧐`, `꧑`, `꧒`, `꧓`, `꧔`, `꧕`, `꧖`, `꧗`, `꧘`, `꧙`, `꧞`, `꧟`]
    },
    "錬金術記号": {
      "すべて": [`🜀`, `🜁`, `🜂`, `🜃`, `🜄`, `🜅`, `🜆`, `🜇`, `🜈`, `🜉`, `🜊`, `🜋`, `🜌`, `🜍`, `🜎`, `🜏`, `🜐`, `🜑`, `🜒`, `🜓`, `🜔`, `🜕`, `🜖`, `🜗`, `🜘`, `🜙`, `🜚`, `🜛`, `🜜`, `🜝`, `🜞`, `🜟`, `🜠`, `🜡`, `🜢`, `🜣`, `🜤`, `🜥`, `🜦`, `🜧`, `🜨`, `🜩`, `🜪`, `🜫`, `🜬`, `🜭`, `🜮`, `🜯`, `🜰`, `🜱`, `🜲`, `🜳`, `🜴`, `🜵`, `🜶`, `🜷`, `🜸`, `🜹`, `🜺`, `🜻`, `🜼`, `🜽`, `🜾`, `🜿`, `🝀`, `🝁`, `🝂`, `🝃`, `🝄`, `🝅`, `🝆`, `🝇`, `🝈`, `🝉`, `🝊`, `🝋`, `🝌`, `🝍`, `🝎`, `🝏`, `🝐`, `🝑`, `🝒`, `🝓`, `🝔`, `🝕`, `🝖`, `🝗`, `🝘`, `🝙`, `🝚`, `🝛`, `🝜`, `🝝`, `🝞`, `🝟`, `🝠`, `🝡`, `🝢`, `🝣`, `🝤`, `🝥`, `🝦`, `🝧`, `🝨`, `🝩`, `🝪`, `🝫`, `🝬`, `🝭`, `🝮`, `🝯`, `🝰`, `🝱`, `🝲`, `🝳`]
    }
  }
  /*

    大区分、中区分、小区分の表示を生成

    # 変数の修飾辞と注記
    - 大区分: large : 日本語、アラビア語、錬金術記号……
    - 中区分: medium: 標準、小さい文字、かっこ……
    - 小区分: small : ：、；、？……

  */
  let largeItem = Object.keys(char)
  let largeElm = ``
  //
  // 大区分（日本語、アラビア語、錬金術記号……）を生成
  //
  for (let i in largeItem) {
    let mediumItem = Object.keys(char[largeItem[i]])
    let mediumElm = ``
    largeElm += `<label class="${prefix}${largeItem[i]} ${prefix}large-label">${largeItem[i]}<input type="checkbox" checked id="${prefix}${largeItem[i]}" class="${prefix}root-member"></label><div class="${prefix}medium-group">`
    //
    // 中区分（標準、小さい文字、かっこ……）を生成
    //
    for (let j in mediumItem) {
      let smallItem = char[largeItem[i]][mediumItem[j]]
      let smallElm = ``
      mediumElm += `<label class="${prefix}${mediumItem[j]} ${prefix}medium-label">${mediumItem[j]}<input type="checkbox" checked id="${prefix}${largeItem[i]}-${mediumItem[j]}" class="${prefix}${largeItem[i]}-member"></label><div class="${prefix}item-group">`
      //
      // 小区分（：、；、？……）を生成
      //
      for (let k in smallItem) {
        smallElm += `<label class="${prefix}item-label">${smallItem[k]}<input type="checkbox" checked id="${prefix}${largeItem[i]}-${mediumItem[j]}-${smallItem[k]}" class="${prefix}${largeItem[i]}-${mediumItem[j]}-member ${prefix}item" name="${prefix}${smallItem[k]}"></label>`
      }
      mediumElm += `${smallElm}</div>`
    }
    largeElm += `${mediumElm}</div>`
  }
  let frontElm = `
  <section id="${prefix}app-area">
    <div id="${prefix}upper-area" class="${prefix}section">
      <label class="${prefix}upper-area-contents">
        生成文字数
        <input type="number" value="${presetNumChar}" id="${prefix}num-char">
      </label>
      <input type="button" value="生成" id="${prefix}execute" class="${prefix}upper-area-contents">
      <input type="text" readonly id="${prefix}output-interface" class="${prefix}upper-area-contents">
    </div>
    <div id="${prefix}middle-area" class="${prefix}section">
      <div id="${prefix}output-interface-vertical" class="${prefix}middle-area-contents"></div>
      <input type="button" value="文字セットを開く" id="${prefix}expand-button" class="${prefix}middle-area-contents">
    </div>
    <div id="${prefix}lower-area" class="${prefix}section">
      <div id="${prefix}large-group">`
  let backElm = `
        </div>
        <label class="${prefix}add-char-label">追加文字<div id="${prefix}add-char-area">
          <textarea id="${prefix}add-char"></textarea>
        </label>
      </div>
    </div>
  </section>`
  document.querySelector(setLocation).innerHTML += frontElm + largeElm + backElm
  let outputInterface = document.querySelector(`#${prefix}output-interface`)
  let outputInterfaceV = document.querySelector(`#${prefix}output-interface-vertical`)
  /*

    操作時の処理

  */
  // 大区分（日本語、アラビア語、錬金術記号……）取得
  let largeCboxCol = document.querySelectorAll(`input.${prefix}root-member`)
  //
  // 大区分（日本語、アラビア語、錬金術記号……）
  //
  largeCboxCol.forEach(largeCbox => {
    // 中区分（標準、小さい文字、かっこ……）取得
    let mediumCboxCol = document.querySelectorAll(`input.${largeCbox.id}-member`)
    // 操作時の処理
    largeCbox.onchange = () => {
      // 大区分にチェックが入ったら
      if (largeCbox.checked) {
        // 下位の中区分をすべてチェックする
        mediumCboxCol.forEach(mediumCbox => {
          mediumCbox.checked = true
          // 下位の小区分をすべてチェックする
          let smallCboxCol = document.querySelectorAll(`input.${mediumCbox.id}-member`)
          smallCboxCol.forEach(smallCbox => {
            smallCbox.checked = true
          })
        })
      }
      // 大区分のチェックが外れたら
      if (!largeCbox.checked) {
        // 下位の中区分のチェックをすべて外す
        mediumCboxCol.forEach(mediumCbox => {
          mediumCbox.checked = false
          // 下位の小区分のチェックをすべて外す
          let smallCboxCol = document.querySelectorAll(`input.${mediumCbox.id}-member`)
          smallCboxCol.forEach(smallCbox => {
            smallCbox.checked = false
          })
        })
      }
    }
    //
    // 中区分（標準、小さい文字、かっこ……）
    //
    mediumCboxCol.forEach(mediumCbox => {
      // 小区分（：、；、？……）取得
      let smallCboxCol = document.querySelectorAll(`input.${mediumCbox.id}-member`)
      // 操作時の処理
      mediumCbox.onchange = () => {
        // 中区分にチェックが入ったら
        if (mediumCbox.checked) {
          // 下位の小区分をすべてチェックする
          smallCboxCol.forEach(smallCbox => {
            smallCbox.checked = true
          })
          // 中区部がすべてチェックされたら上位の大区分をチェックする
          let mediumAll = 1
          for (let item of mediumCboxCol) {
            mediumAll = item.checked === true ? mediumAll * 1 : 0
          }
          largeCbox.checked = mediumAll === 1 ? true : false
        }
        // 中区分のチェックが外れたら
        if (!mediumCbox.checked) {
          // 上位の大区分のチェックを外す
          largeCbox.checked = false
          // 下位の小区分のチェックをすべて外す
          smallCboxCol.forEach(smallCbox => {
            smallCbox.checked = false
          })
        }
      }
      //
      // 小区分（：、；、？……）
      //
      smallCboxCol.forEach(smallCbox => {
        // 操作時の処理
        smallCbox.onchange = () => {
          // 小区分にチェックが入ったら
          if (smallCbox.checked) {
            // 小区部がすべてチェックされたら上位の大区分と中区分をチェックする
            let smallAll = 1
            for (let item of smallCboxCol) {
              smallAll = item.checked === true ? smallAll * 1 : 0
            }
            largeCbox.checked = mediumCbox.checked = smallAll === 1 ? true : false
          }
          // チェックが外れたら
          if (!smallCbox.checked) {
            // 上位の大区分のチェックを外す
            largeCbox.checked = false
            // 上位の中区分のチェックを外す
            mediumCbox.checked = false
          }
        }
      })
    })
  })
  /*

    生成処理

  */
  document.querySelector(`#${prefix}execute`).onclick = () => {
    let numChar = document.querySelector(`#${prefix}num-char`).value
    if (numChar === undefined || numChar === 0) {
      numChar = Math.ceil(Math.random() * 10)
    }
    let charSet = Array.from(new Set(Array
    .from(document.querySelectorAll(`.${prefix}item`))
    .filter(rly => rly.checked === true)
    .map(rly => rly = rly.name.substring(prefix.length))
    .concat(document.querySelector(`#${prefix}add-char`).value.split(``))))
    let output = ``
    for (let i = 0; i < numChar; i++) {
      output += charSet[Math.floor(Math.random() * charSet.length)]
    }
    outputInterface.value = outputInterfaceV.innerText = output
  }
  /*

    その他

  */
  // 文字パレットの開閉
  let loserArea = document.querySelector(`#${prefix}lower-area`)
  loserArea.style.height = 0
  loserArea.style.overflowY = `hidden`
  let loserAreaOpen = false
  let expBtn = document.querySelector(`#${prefix}expand-button`)
  document.querySelector(`#${prefix}expand-button`).onclick = () => {
    if (!loserAreaOpen) {
      loserAreaOpen = true
      expBtn.value = `文字セットを閉じる`
      setTimeout(() => {
        loserArea.style.height = `unset`
      }, 100)
      loserArea.animate(
        [
          {
            height: 0
          },
          {
            height: `unset`,
            delay: 100
          }
        ],
        200
      )
    }
    else {
      loserAreaOpen = false
      expBtn.value = `文字セットを開く`
      setTimeout(() => {
        loserArea.style.height = 0
      }, 100)
      loserArea.animate(
        [
          {
            height: `unset`
          },
          {
            height: 0,
            delay: 100
          }
        ],
        200
      )
    }
  }
  //
  // 出力結果をクリックしたら全選択する
  //
  outputInterface.onfocus = () => {
    outputInterface.select()
  }
  outputInterfaceV.onclick = () => {
    let selectRange = document.createRange()
    selectRange.setStart(outputInterfaceV, 0)
    selectRange.setEnd(outputInterfaceV, outputInterfaceV.childNodes.length)
    document.getSelection().removeAllRanges()
    document.getSelection().addRange(selectRange)
  }
}
