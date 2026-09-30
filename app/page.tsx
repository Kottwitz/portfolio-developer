import React from 'react';
import { 
  Bot, 
  Code2, 
  Cpu, 
  Server, 
  Database, 
  Terminal, 
  FileCode2 
} from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 font-sans selection:bg-emerald-500 selection:text-black">
      
      {/* Background Decorativo Grid / Ambient Light */}
      <div className="fixed inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* HEADER / NAVEGAÇÃO */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0B0F19]/80 border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="font-mono text-lg font-bold tracking-tight text-slate-100 hover:text-emerald-400 transition-colors">
            &lt;<span className="text-emerald-400">RafaelKottwitz</span> /&gt;
          </a>

          <nav className="hidden md:flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-full border border-slate-800/80 text-sm font-medium">
            <a href="#home" className="px-5 py-2 rounded-full bg-emerald-500/10 text-emerald-400 font-mono border border-emerald-500/20 shadow-sm transition-all">Home</a>
            <a href="#projetos" className="px-5 py-2 rounded-full text-slate-400 hover:text-slate-200 transition-colors">Projetos</a>
            <a href="#experiencia" className="px-5 py-2 rounded-full text-slate-400 hover:text-slate-200 transition-colors">Tech Stack</a>
            <a href="#contato" className="px-5 py-2 rounded-full text-slate-400 hover:text-slate-200 transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-24">

        {/* HERO SECTION */}
        <section id="home" className="text-center pt-8 pb-4 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Disponível para novos projetos
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-sans text-slate-50 uppercase">
            RAFAEL BATISTA KOTTWITZ
          </h1>

          <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent font-mono">
            Desenvolvedor Full Stack
          </p>

          <p className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg leading-relaxed">
            Especializado em desenvolvimento web completo, arquitetura de APIs RESTful resilientes, microsserviços e integração de soluções com Inteligência Artificial.
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <a 
              href="https://wa.me/5547988258610" 
              target="_blank" 
              rel="noreferrer" 
              className="px-6 py-3 rounded-lg bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 font-mono text-sm flex items-center gap-2"
            >
              Entrar em contato
            </a>
            <a href="#projetos" className="px-6 py-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white transition-all font-mono text-sm">
              Ver Projetos
            </a>
          </div>
        </section>

        {/* PROJETOS EM DESTAQUE */}
        <section id="projetos" className="space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <Terminal className="text-emerald-400" size={24} />
            <h2 className="text-2xl font-bold font-mono tracking-wide text-slate-100">Projetos em Destaque</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* CARD 1: CMS Django */}
            <div className="group relative bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.15)] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 font-sans">Content Management System (CMS)</h3>
                    <p className="text-xs font-mono text-emerald-400 mt-1">Sistemas & Gestão / Construção Civil</p>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Sistema completo para gerenciamento de conteúdos e dados de obras com suporte a permissões, dashboards analíticos e exportação em lote.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/60 text-xs font-mono text-slate-300">Python</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/60 text-xs font-mono text-slate-300">Django</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/60 text-xs font-mono text-slate-300">PostgreSQL</span>
                </div>

                <div className="mt-4 bg-[#080B11] border border-slate-800 rounded-lg overflow-hidden font-mono text-xs">
                  <div className="bg-slate-900/90 px-3 py-1.5 border-b border-slate-800 flex items-center justify-between text-slate-400">
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <FileCode2 size={13} /> cms_views.py
                    </span>
                    <span className="text-[10px] text-slate-500">Python 3.11</span>
                  </div>
                  <pre className="p-3 text-slate-300 overflow-x-auto leading-relaxed">
                    <code>
                      <span className="text-purple-400">import</span> django <span className="text-purple-400">as</span> cms{"\n"}
                      <span className="text-purple-400">class</span> <span className="text-yellow-300">DjangoCMS</span>(views.View):{"\n"}
                      {"  "}<span className="text-purple-400">def</span> <span className="text-blue-400">snippet</span>(self):{"\n"}
                      {"    "}status = content.get_status(){"\n"}
                      {"    "}<span className="text-purple-400">return</span> content.create_report()
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* CARD 2: Gemini AI Integration */}
            <div className="group relative bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.15)] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 font-sans">AI Gemini Integration</h3>
                    <p className="text-xs font-mono text-cyan-400 mt-1">Inteligência Artificial & Chatbot</p>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Integração de assistente virtual inteligente com SDK Gemini da Google, processamento sintático e chamadas assíncronas de API para contextualização de respostas.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/60 text-xs font-mono text-slate-300">Python</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/60 text-xs font-mono text-slate-300">FastAPI</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/60 text-xs font-mono text-cyan-300">Gemini SDK</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/60 text-xs font-mono text-slate-300">Node.js</span>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
                  <div className="sm:col-span-1 bg-cyan-950/30 border border-cyan-500/30 rounded-lg p-4 flex flex-col items-center justify-center text-cyan-400 shadow-[0_0_15px_-3px_rgba(6,182,212,0.2)]">
                    <Bot size={36} className="animate-bounce" />
                    <span className="font-mono text-xs font-bold mt-2 tracking-widest uppercase">AI Core</span>
                  </div>

                  <div className="sm:col-span-2 bg-[#080B11] border border-slate-800 rounded-lg overflow-hidden font-mono text-xs">
                    <div className="bg-slate-900/90 px-3 py-1.5 border-b border-slate-800 flex items-center justify-between text-slate-400">
                      <span className="text-cyan-400 flex items-center gap-1.5">
                        <FileCode2 size={13} /> gemini.js
                      </span>
                    </div>
                    <pre className="p-3 text-slate-300 overflow-x-auto leading-relaxed">
                      <code>
                        {"const ai = new Gemini();\n"}
                        {"const res = await ai.prompt({\n"}
                        {'  model: "gemini-1.5-pro"\n'}
                        {"});"}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3: Downtime Monitor API */}
            <div className="group relative bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.15)]">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-100 font-sans">API de Monitoramento Industrial</h3>
                <p className="text-xs font-mono text-emerald-400">Automação & Métricas Industriais</p>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Serviço backend para captura de eventos em linhas de produção, mensuração de tempo de inatividade (downtime) e notificação automatizada para operadores.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/60 text-xs font-mono text-slate-300">C# (.NET Core)</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/60 text-xs font-mono text-slate-300">SQL Server</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/60 text-xs font-mono text-slate-300">REST API</span>
                </div>
              </div>
            </div>

            {/* CARD 4: Landing Pages */}
            <div className="group relative bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.15)]">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-100 font-sans">Landing Pages Comerciais</h3>
                <p className="text-xs font-mono text-cyan-400">UI/UX & Front-End</p>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Desenvolvimento de páginas ultra-velozes, com foco em performance, otimização de SEO (Core Web Vitals) e interatividade refinada com Tailwind CSS.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/60 text-xs font-mono text-slate-300">JavaScript</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/60 text-xs font-mono text-slate-300">Tailwind CSS</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/60 text-xs font-mono text-slate-300">UI/UX Responsivo</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* TECH STACK */}
        <section id="experiencia" className="space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <Cpu className="text-cyan-400" size={24} />
            <h2 className="text-2xl font-bold font-mono tracking-wide text-slate-100">Tech Stack & Competências</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { name: "Python (Django, FastAPI)", icon: <Code2 size={18} /> },
              { name: "C# (.NET Core)", icon: <Terminal size={18} /> },
              { name: "JavaScript / Node.js", icon: <Code2 size={18} /> },
              { name: "PHP", icon: <Code2 size={18} /> },
              { name: "PostgreSQL / MySQL", icon: <Database size={18} /> },
              { name: "SQL Server", icon: <Database size={18} /> },
              { name: "Tailwind CSS", icon: <Cpu size={18} /> },
              { name: "Git & GitHub", icon: <Server size={18} /> }
            ].map((tech, i) => (
              <div key={i} className="flex items-center gap-3 p-3.5 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-slate-700 hover:bg-slate-900/80 transition-all text-slate-300 font-mono text-xs">
                <span className="text-emerald-400">{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER / CONTATO */}
        <footer id="contato" className="border-t border-slate-800/80 pt-12 pb-8 space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="space-y-1 text-center md:text-left">
              <p className="font-mono text-base text-slate-200 font-bold">&lt;RafaelKottwitz/&gt;</p>
              <p className="text-xs text-slate-400">Desenvolvedor Full Stack • {new Date().getFullYear()}</p>
            </div>

            {/* Redes Sociais */}
            <div className="flex items-center gap-4">
              {/* GitHub */}
              <a 
                href="https://github.com/Kottwitz" 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all shadow-md"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/rafael-kottwitz" 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all shadow-md"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* WhatsApp (Substituindo o Email) */}
              <a 
                href="https://wa.me/5547988258610" 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all shadow-md"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.758.459 3.474 1.33 4.982l-1.413 5.164 5.285-1.386a9.923 9.923 0 004.788 1.224h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.668-1.038-5.176-2.924-7.062A9.92 9.92 0 0012.012 2zm5.82 14.331c-.244.688-1.42 1.313-1.96 1.388-.5.068-1.144.101-3.664-.942-3.221-1.332-5.288-4.606-5.449-4.821-.161-.215-1.309-1.742-1.309-3.323 0-1.581.828-2.359 1.122-2.68.293-.321.642-.401.856-.401.214 0 .429.002.616.012.2.01.468-.076.732.558.271.649.927 2.261 1.008 2.422.08.161.134.348.027.563-.107.215-.161.348-.321.536-.161.188-.338.421-.482.565-.161.161-.329.336-.142.658.188.322.833 1.375 1.787 2.225 1.228 1.094 2.263 1.433 2.585 1.594.322.161.509.134.697-.08.188-.215.804-.938 1.018-1.26.215-.322.429-.268.724-.161.295.107 1.875.884 2.196 1.045.322.161.536.241.616.375.08.134.08.777-.164 1.465z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center font-mono text-xs text-slate-500 pt-6 border-t border-slate-900">
            Copyright © {new Date().getFullYear()} All rights reserved.
          </div>
        </footer>

      </main>
    </div>
  );
}