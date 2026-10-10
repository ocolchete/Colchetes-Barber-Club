import React, { useState } from 'react';
import { Shield, Zap, Sparkles, CheckCircle2, ArrowRight, Menu, X, Star, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              NexusWeb
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Recursos</a>
            <a href="#benefits" className="hover:text-white transition-colors">Vantagens</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Depoimentos</a>
            <a href="#pricing" className="hover:text-white transition-colors">Preços</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-white px-4 py-2 transition-colors">
              Entrar
            </a>
            <a href="#pricing" className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-indigo-600/20">
              Começar Agora
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-white">Recursos</a>
            <a href="#benefits" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-white">Vantagens</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-white">Depoimentos</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-white">Preços</a>
            <div className="pt-4 flex flex-col gap-2">
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="w-full bg-indigo-600 text-center py-2.5 rounded-xl font-medium text-white">
                Começar Agora
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-8">
            <Sparkles className="w-3.5 h-3.5" /> Nova Versão 2.0 Disponível
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
            Construa o futuro da sua <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">presença digital</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
            Plataforma moderna, rápida e altamente escalável para impulsionar seus projetos ao próximo nível com facilidade.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#pricing" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-8 py-4 rounded-xl transition-all shadow-xl shadow-indigo-600/30 text-base">
              Iniciar Gratuitamente <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#features" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-300 font-medium px-8 py-4 rounded-xl border border-slate-800 transition-all text-base">
              Ver Recursos
            </a>
          </div>

          {/* Hero Image / Mockup */}
          <div className="mt-16 relative max-w-5xl mx-auto">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-30 blur-xl" />
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/90 p-4 shadow-2xl backdrop-blur">
              <div className="flex items-center gap-2 pb-4 border-b border-slate-800">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-slate-500 font-mono">nexus-dashboard.app</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/80 text-left">
                  <p className="text-xs text-slate-400 font-medium">Usuários Ativos</p>
                  <p className="text-2xl font-bold text-white mt-1">+24.500</p>
                  <span className="text-xs text-emerald-400 font-semibold mt-2 inline-block">+12% este mês</span>
                </div>
                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/80 text-left">
                  <p className="text-xs text-slate-400 font-medium">Taxa de Conversão</p>
                  <p className="text-2xl font-bold text-white mt-1">4.8%</p>
                  <span className="text-xs text-emerald-400 font-semibold mt-2 inline-block">+0.6% otimizado</span>
                </div>
                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/80 text-left">
                  <p className="text-xs text-slate-400 font-medium">Tempo de Resposta</p>
                  <p className="text-2xl font-bold text-white mt-1">45ms</p>
                  <span className="text-xs text-indigo-400 font-semibold mt-2 inline-block">Ultra rápido</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-900/50 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Recursos poderosos para sua escala</h2>
            <p className="mt-4 text-slate-400 text-lg">
              Tudo o que você precisa para criar aplicações de alto desempenho sem complicação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Extrema</h3>
              <p className="text-slate-400 leading-relaxed">
                Otimizado para carregar em milissegundos com arquitetura moderna baseada em nuvem.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Segurança Avançada</h3>
              <p className="text-slate-400 leading-relaxed">
                Proteção contra ameaças em tempo real e criptografia ponta a ponta em todos os dados.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Design Intuitivo</h3>
              <p className="text-slate-400 leading-relaxed">
                Interfaces limpas, acessíveis e focadas na experiência ideal para o usuário final.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Amado por desenvolvedores e líderes</h2>
            <p className="mt-4 text-slate-400 text-lg">
              Veja o que nossos clientes dizem sobre a experiência com o NexusWeb.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 italic mb-6">
                  "O NexusWeb transformou totalmente a forma como lançamos nossos produtos. A velocidade de desenvolvimento dobrou e a satisfação dos usuários é nítida."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white">
                  MC
                </div>
                <div>
                  <p className="font-semibold text-white">Mariana Costa</p>
                  <p className="text-xs text-slate-400">CTO na TechFlow</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 italic mb-6">
                  "Incrível como a plataforma entrega robustez e simplicidade ao mesmo tempo. O suporte é rápido e prestativo. Recomendo para qualquer empresa."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white">
                  RS
                </div>
                <div>
                  <p className="font-semibold text-white">Rafael Souza</p>
                  <p className="text-xs text-slate-400">Fundador da DevPulse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-900/50 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Planos simples e transparentes</h2>
            <p className="mt-4 text-slate-400 text-lg">
              Escolha o plano ideal para o seu momento atual. Sem taxas escondidas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">Starter</h3>
                <p className="text-slate-400 text-sm mt-1">Ideal para projetos pessoais e testes.</p>
                <div className="my-6">
                  <span className="text-4xl font-extrabold text-white">R$ 29</span>
                  <span className="text-slate-400 text-sm"> /mês</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Até 3 projetos</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Suporte básico</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> 10GB de armazenamento</li>
                </ul>
              </div>
              <a href="#contact" className="mt-8 block w-full bg-slate-800 hover:bg-slate-700 text-white text-center font-medium py-3 rounded-xl transition-colors">
                Escolher Starter
              </a>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-indigo-950/60 to-slate-900 border-2 border-indigo-500 relative flex flex-col justify-between shadow-2xl shadow-indigo-500/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Mais Popular
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Pro</h3>
                <p className="text-slate-400 text-sm mt-1">Para equipes e negócios em crescimento.</p>
                <div className="my-6">
                  <span className="text-4xl font-extrabold text-white">R$ 89</span>
                  <span className="text-slate-400 text-sm"> /mês</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Projetos ilimitados</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Suporte prioritário 24/7</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> 100GB de armazenamento</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Domínio personalizado</li>
                </ul>
              </div>
              <a href="#contact" className="mt-8 block w-full bg-indigo-600 hover:bg-indigo-500 text-white text-center font-medium py-3 rounded-xl transition-colors shadow-lg shadow-indigo-600/30">
                Escolher Pro
              </a>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">Enterprise</h3>
                <p className="text-slate-400 text-sm mt-1">Para grandes operações e alta demanda.</p>
                <div className="my-6">
                  <span className="text-4xl font-extrabold text-white">R$ 249</span>
                  <span className="text-slate-400 text-sm"> /mês</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Recursos dedicados</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Gerente de conta exclusivo</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Armazenamento ilimitado</li>
                </ul>
              </div>
              <a href="#contact" className="mt-8 block w-full bg-slate-800 hover:bg-slate-700 text-white text-center font-medium py-3 rounded-xl transition-colors">
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / Footer */}
      <footer id="contact" className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-16 border-b border-slate-800/80 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white">Fique por dentro das novidades</h3>
              <p className="text-slate-400 mt-2">Inscreva-se na nossa newsletter para receber atualizações exclusivas.</p>
            </div>
            <div>
              {subscribed ? (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> Obrigado! Inscrição realizada com sucesso.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Seu melhor e-mail"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                  <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                    Inscrever
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
                N
              </div>
              <span className="font-bold text-white">NexusWeb</span>
              <span className="text-slate-600">|</span>
              <span className="text-xs text-slate-500">© {new Date().getFullYear()} Todos os direitos reservados.</span>
            </div>

            <div className="flex items-center gap-4 text-slate-400">
              <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
