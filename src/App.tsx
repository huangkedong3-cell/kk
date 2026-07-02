const services = [
  ["法律咨询", "就企业日常经营管理中的法律问题，提供及时的书面或口头咨询服务。"],
  ["合同管理", "协助建立标准合同文本，审查交易文件，并提示签署与履行风险。"],
  ["公司风控合规", "围绕规章制度、劳动人事、内部管理和合规流程提供系统支持。"],
  ["诉讼仲裁与调解", "处理非诉讼调解、诉讼、仲裁及各类商事争议解决事务。"],
  ["政府与本地法律服务", "深耕深圳本地法律环境，为政府机构和企业提供针对性法律方案。"],
  ["专项法律事务", "覆盖资本市场、知识产权、涉外涉港澳、数字经济、并购重组等专项服务。"],
];

const strengths = [
  "本地化：深耕深圳，熟悉本地政策导向、法律环境与市场动态。",
  "产业化：关注数字经济、数据合规、新能源及节能等新兴产业。",
  "专业化：以政府服务、商事争议解决、数据合规等能力支撑复杂事项。",
  "协同化：围绕重点产业形成“行业专家+律师”的服务模式。",
];

const promises = [
  "人员保证：根据项目需要配置稳定服务团队，并保留补充成员机制。",
  "快速响应：接到委托或指派后及时联系，重大事项快速安排承办人员。",
  "高效工作：普通合同审核通常 1-2 个工作日反馈，疑难事项分阶段交付。",
  "现场支持：重大紧急事项可根据需求安排人员到场参与会议、谈判。",
  "保密承诺：严格保护客户机密信息，不向第三方披露或泄露。",
];

function LogoMark() {
  return (
    <svg className="logo-mark" viewBox="0 0 283 101" role="img" aria-labelledby="logo-title">
      <title id="logo-title">亘盛律师事务所</title>
      <text className="logo-latin" x="0" y="42">
        G<tspan className="logo-blue">E</tspan>NSH<tspan className="logo-blue">E</tspan>NG
      </text>
      <text className="logo-cn" x="0" y="90">亘 盛 律 师 事 务 所</text>
    </svg>
  );
}

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回首页">
          <LogoMark />
        </a>
        <nav>
          <a href="#services">业务</a>
          <a href="#strengths">优势</a>
          <a href="#process">流程</a>
          <a href="#contact">联系</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-inner">
          <p className="eyebrow">广东亘盛律师事务所 · 常年顾问 · 专项法律服务</p>
          <h1>扎根深圳，提供专业、高效、可信赖的法律服务</h1>
          <p>
            广东亘盛律师事务所于 2011 年经广东省司法厅批准设立，是深圳本地深耕多年的普通合伙制律师事务所。
            我们秉持“以客户为中心，以质量为根本”的服务理念，为企业、政府机构与个人客户提供法律顾问及专项法律服务。
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">预约咨询</a>
            <a className="button secondary" href="#services">查看服务内容</a>
          </div>
          <dl className="facts">
            <div><dt>2011</dt><dd>经广东省司法厅批准设立</dd></div>
            <div><dt>深圳</dt><dd>本地深耕法律服务机构</dd></div>
            <div><dt>常顾</dt><dd>覆盖企业经营与合规管理</dd></div>
            <div><dt>专项</dt><dd>支持复杂项目与争议处置</dd></div>
          </dl>
        </div>
      </section>

      <section className="section intro">
        <div>
          <p className="eyebrow dark">关于亘盛</p>
          <h2>以客户为中心，以质量为根本</h2>
        </div>
        <div className="prose">
          <p>亘盛汇聚执业年限长、实务经验丰富的律师力量，注重与客户的沟通和协作，以高度责任心为客户提供专业、及时、有效的法律服务。</p>
          <p>在传统法律服务基础上，亘盛持续关注数字经济、数据合规等前沿领域，并通过所内协作和社区法律服务不断提升专业素养与服务能力。</p>
        </div>
      </section>

      <section className="section muted" id="services">
        <p className="eyebrow dark">Service Scope</p>
        <h2>法律服务内容</h2>
        <p className="lead">参照法律服务方案模板，重点呈现常年法律顾问和专项法律事务能力。</p>
        <div className="card-grid">
          {services.map(([title, text]) => (
            <article className="card" key={title}>
              <span className="mark" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="strengths">
        <div>
          <p className="eyebrow dark">Our Strengths</p>
          <h2>本地化、产业化、专业化的综合服务能力</h2>
          <p className="lead">亘盛围绕深圳本地法律需求和重点产业发展，持续扩展法律服务能力。法律方案不只需要准确，更要贴合行业、场景和执行成本。</p>
        </div>
        <div className="list-panel">
          {strengths.map((item) => <p key={item}>{item}</p>)}
        </div>
      </section>

      <section className="section dark" id="process">
        <p className="eyebrow">Service Process</p>
        <h2>清晰的服务流程</h2>
        <div className="steps">
          {["需求沟通", "材料审阅", "方案研判", "项目执行", "成果反馈"].map((step, index) => (
            <article key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section muted">
        <p className="eyebrow dark">Commitments</p>
        <h2>服务承诺</h2>
        <div className="list-panel">
          {promises.map((item) => <p key={item}>{item}</p>)}
        </div>
      </section>

      <section className="section contact" id="contact">
        <div>
          <p className="eyebrow dark">Contact</p>
          <h2>进一步了解法律服务方案</h2>
          <p className="lead">如需了解常年法律顾问、专项法律事务或项目法律支持，可先进行初步沟通。以下联系方式为示例，请在正式发布前替换为真实信息。</p>
          <p className="contact-line">电话：400-000-0000</p>
          <p className="contact-line">邮箱：contact@example.com</p>
          <p className="contact-line">地址：深圳市福田区示例办公地址</p>
        </div>
        <form className="contact-form">
          <label>姓名<input type="text" placeholder="请输入姓名" /></label>
          <label>联系方式<input type="text" placeholder="电话或邮箱" /></label>
          <label>咨询事项<textarea placeholder="请简要说明你希望咨询的问题" rows={5} /></label>
          <button type="button">提交咨询意向</button>
          <small>当前表单为静态展示，不会发送信息。</small>
        </form>
      </section>
    </main>
  );
}

export default App;
