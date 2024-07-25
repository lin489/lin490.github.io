    //屏幕截图
    function screenShot() {
        const dom = document.querySelector('#cesium');
        const box = window.getComputedStyle(dom);
        // DOM 节点计算后宽高
        const width = parseInt(box.width, 10);
        const height = parseInt(box.height, 10);
        // 获取像素比
        const scaleBy = 1;
        // 创建自定义 canvas 元素
        const canvas = document.createElement('canvas');
        // 设定 canvas 元素属性宽高为 DOM 节点宽高 * 像素比
        canvas.width = width * scaleBy;
        canvas.height = height * scaleBy;
        // 设定 canvas css宽高为 DOM 节点宽高
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        // 获取画笔
        const context = canvas.getContext('2d');
        // 将所有绘制内容放大像素比倍
        context.scale(scaleBy, scaleBy);
        // 将自定义 canvas 作为配置项传入，开始绘制
        html2canvas(dom, { canvas, background: '#ffffff' }).then((canvas) => {
          console.log(canvas);
          let oA = document.createElement("a");
          oA.download = "Cesium截图.png";// 设置下载的文件名，默认是'下载'
          oA.href = canvas.toDataURL('image/png', 1.0);
          document.body.appendChild(oA);
          oA.click();
          oA.remove();
        })
  
        // html2canvas(document.querySelector("#cesium")).then(canvas => {
        // });
      }
  
  