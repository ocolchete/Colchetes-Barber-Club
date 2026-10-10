import React, { useState } from 'react';
import { Star, Shield, Zap, Sparkles, CheckCircle2, ArrowRight, Menu, X, MapPin, Store, QrCode, ExternalLink, Send, PlusCircle, Search } from 'lucide-react';

interface Company {
  id: string;
  name: string;
  category: string;
  city: string;
  googleUrl: string;
  rating: number;
  reviewsCount: number;
  description: string;
  hasPlaquinha: boolean;
}

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const [orderForm, setOrderForm] = useState({
    nome: '',
    empresa: '',
    whatsapp: '',
    cidade: '',
    googleLink: ''
  });

  const [registerForm, setRegisterForm] = useState({
    name: '',
    category: 'Alimentação',
    city: '',
    googleUrl: '',
    description: '',
    hasPlaquinha: true
  });

  const [companies, setCompanies] = useState<Company[]>([
    {
      id: '1',
      name: 'Cafeteria Aroma & Arte',
      category: 'Alimentação',
      city: 'São Paulo - SP',
      googleUrl: 'https://maps.google.com',
      rating: 4.9,
      reviewsCount: 320,
      description: 'O melhor café artesanal da região com ambiente aconchegante.',
      hasPlaquinha: true
    },
    {
      id: '2',
      name: 'Auto Elétrica São Cristóvão',
      category: 'Automotivo',
      city: 'Campinas - SP',
      googleUrl: 'https://maps.google.com',
      rating: 4.8,
      reviewsCount: 195,
      description: 'Serviço rápido, honesto e especializado em elétrica automotiva.',
      hasPlaquinha: true
    },
    {
      id: '3',
      name: 'Studio Bela Vista Cabelo & Corpo',
      category: 'Beleza',
      city: 'Rio de Janeiro - RJ',
      googleUrl: 'https://maps.google.com',
      rating: 5.0,
      reviewsCount: 410,
      description: 'Cuidando da sua beleza com profissionais renomados e tecnologia.',
      hasPlaquinha: true
    },
    {
      id: '4',
      name: 'Clinica OdontoSorriso',
      category: 'Saúde',
      city: 'Curitiba - PR',
      googleUrl: 'https://maps.google.com',
      rating: 4.9,
      reviewsCount: 280,
      description: 'Sorrisos saudáveis e atendimento humanizado para toda a família.',
      hasPlaquinha: true
    }
  ]);

  const categories = ['Todas', 'Alimentação', 'Automotivo', 'Beleza', 'Saúde', 'Serviços'];

  const filteredCompanies = companies.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todas' || c.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage('Pedido da Plaquinha recebido com sucesso! Entraremos em contato via WhatsApp.');
    setTimeout(() => {
      setIsOrderModalOpen(false);
      setSuccessMessage('');
      setOrderForm({ nome: '', empresa: '', whatsapp: '', cidade: '', googleLink: '' });
    }, 3000);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newComp: Company = {
      id: Date.now().toString(),
      name: registerForm.name,
      category: registerForm.category,
      city: registerForm.city,
      googleUrl: registerForm.googleUrl || 'https://maps.google.com',
      rating: 5.0,
      reviewsCount: 1,
      description: registerForm.description || 'Empresa membro da Rede Google Reviews.',
      hasPlaquinha: registerForm.hasPlaquinha
    };
    setCompanies([newComp, ...companies]);
    setSuccessMessage('Empresa cadastrada com sucesso na nossa rede!');
    setTimeout(() => {
      setIsRegisterModalOpen(false);
      setSuccessMessage('');
      setRegisterForm({ name: '', category: 'Alimentação', city: '', googleUrl: '', description: '', hasPlaquinha: true });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <QrCode className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              GooglePlaquinha & Rede
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
            <a href="#plaquinha" className="hover:text-white transition-colors">A Plaquinha NFC</a>
            <a href="#rede" className="hover:text-white transition-colors">Rede de Empresas</a>
            <a href="#beneficios" className="hover:text-white transition-colors">Vantagens</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => setIsRegisterModalOpen(true)}
              className="text-sm font-medium text-slate-300 hover:text-white px-4 py-2 transition-colors"
            >
              Cadastrar Empresa
            </button>
            <button 
              onClick={() => setIsOrderModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-blue-600/25"
            >
              Pedir Plaquinha
            </button>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-4 pb-6 space-y-3">
            <a href="#como-funciona" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-white">Como Funciona</a>
            <a href="#plaquinha" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-white">A Plaquinha NFC</a>
            <a href="#rede" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-white">Rede de Empresas</a>
            <a href="#beneficios" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-white">Vantagens</a>
            <div className="pt-4 flex flex-col gap-2">
              <button onClick={() => { setMobileMenuOpen(false); setIsRegisterModalOpen(true); }} className="w-full text-center py-2.5 rounded-xl bg-slate-800 text-slate-200 font-medium">Cadastrar Empresa</button>
              <button onClick={() => { setMobileMenuOpen(false); setIsOrderModalOpen(true); }} className="w-full text-center py-2.5 rounded-xl bg-blue-600 text-white font-medium">Pedir Plaquinha</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-8">
            <Sparkles className="w-3.5 h-3.5" /> Multiplique suas avaliações no Google em até 5x
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
            Destaque seu <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-teal-400 bg-clip-text text-transparent">Google Meu Negócio</span> e entre na nossa Rede
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
            Compre a plaquinha NFC de avaliação para o seu balcão, receba mais 5 estrelas dos clientes e ganhe destaque gratuito na nossa vitrine de empresas parceiras.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setIsOrderModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-4 rounded-xl transition-all shadow-xl shadow-blue-600/30 text-base"
            >
              Pedir Plaquinha NFC <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsRegisterModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-300 font-medium px-8 py-4 rounded-xl border border-slate-800 transition-all text-base"
            >
              <PlusCircle className="w-5 h-5 text-blue-400" /> Cadastrar Empresa na Rede
            </button>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-slate-900/80 border border-slate-800/80 p-5 rounded-2xl text-center">
              <p className="text-3xl font-extrabold text-white">+1.200</p>
              <p className="text-xs text-slate-400 mt-1">Plaquinhas Entregues</p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800/80 p-5 rounded-2xl text-center">
              <p className="text-3xl font-extrabold text-white">4.9★</p>
              <p className="text-xs text-slate-400 mt-1">Média de Avaliação</p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800/80 p-5 rounded-2xl text-center">
              <p className="text-3xl font-extrabold text-white">+50k</p>
              <p className="text-xs text-slate-400 mt-1">Avaliações Geradas</p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800/80 p-5 rounded-2xl text-center">
              <p className="text-3xl font-extrabold text-white">100%</p>
              <p className="text-xs text-slate-400 mt-1">Garantia e Suporte</p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-24 bg-slate-900/40 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Como funciona a nossa solução</h2>
            <p className="mt-4 text-slate-400 text-lg">
              Simples, rápido e automatizado para turbinar a reputação do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 relative">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-lg mb-6">
                01
              </div>
              <h3 className="text-xl font-semibold mb-3">Peça sua Plaquinha</h3>
              <p className="text-slate-400 leading-relaxed">
                Nós gravamos seu link do Google Meu Negócio no chip NFC e QR Code da plaquinha personalizada.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 relative">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-lg mb-6">
                02
              </div>
              <h3 className="text-xl font-semibold mb-3">Aproxime o Celular</h3>
              <p className="text-slate-400 leading-relaxed">
                O cliente aproxima o smartphone (ou lê o QR Code) e vai direto para a tela de 5 estrelas do seu Google.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 relative">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold text-lg mb-6">
                03
              </div>
              <h3 className="text-xl font-semibold mb-3">Entre na Rede</h3>
              <p className="text-slate-400 leading-relaxed">
                Sua empresa ganha destaque em nossa vitrine digital, gerando mais autoridade e tráfego orgânico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plaquinha Product Showcase */}
      <section id="plaquinha" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
                Tecnologia NFC + QR Code
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                A Plaquinha definitiva para coletar avaliações no balcão
              </h2>
              <p className="mt-4 text-slate-300 text-lg leading-relaxed">
                Esqueça cartões de papel que o cliente perde. Nossa placa acrílica de alta durabilidade fica linda no seu caixa, recepção ou mesa.
              </p>
              
              <ul className="mt-8 space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Compatível com 100% dos smartphones modernos (Android e iPhone).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Não precisa baixar nenhum aplicativo ou configurar nada.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Personalizada com o logotipo e identidade visual do seu comércio.</span>
                </li>
              </ul>

              <div className="mt-10">
                <button
                  onClick={() => setIsOrderModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/30"
                >
                  Garantir Minha Plaquinha Agora <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-600 opacity-20 blur-xl" />
              <div className="relative rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl text-center">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
                  <QrCode className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Avalie-nos no Google</h3>
                <p className="text-sm text-slate-400 mt-2">Aproxime o seu celular ou aponte a câmera</p>
                <div className="flex justify-center gap-1.5 my-6 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-amber-400" />
                  ))}
                </div>
                <div className="py-3 px-4 rounded-xl bg-slate-950 border border-slate-800 inline-block text-xs font-mono text-slate-300">
                  📶 Tecnologia NFC Integrada
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rede de Empresas Section */}
      <section id="rede" className="py-24 bg-slate-900/50 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
              Vitrine Exclusiva
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold">Conheça a nossa Rede de Empresas</h2>
            <p className="mt-4 text-slate-400 text-lg">
              Comércios de destaque que usam nossas plaquinhas e recomendam qualidade.
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-12 justify-between items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por nome ou cidade..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                      : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Companies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCompanies.map(company => (
              <div key={company.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {company.category}
                    </span>
                    {company.hasPlaquinha && (
                      <span className="flex items-center gap-1 text-xs text-teal-400 bg-teal-500/10 px-2 py-1 rounded-lg border border-teal-500/20">
                        <Store className="w-3 h-3" /> Plaquinha Oficial
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{company.name}</h3>
                  <p className="flex items-center gap-1 text-xs text-slate-400 mt-1 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" /> {company.city}
                  </p>

                  <p className="text-sm text-slate-300 line-clamp-2 mb-4">{company.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="font-bold text-white text-sm">{company.rating}</span>
                    <span className="text-xs text-slate-500">({company.reviewsCount})</span>
                  </div>

                  <a 
                    href={company.googleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-blue-400 hover:text-blue-300"
                  >
                    Ver no Google <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredCompanies.length === 0 && (
            <div className="text-center py-12 bg-slate-900/50 rounded-2xl border border-slate-800">
              <p className="text-slate-400">Nenhuma empresa encontrada com os filtros selecionados.</p>
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm mb-4">Tem uma empresa e quer aparecer nesta rede?</p>
            <button
              onClick={() => setIsRegisterModalOpen(true)}
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-medium px-6 py-3 rounded-xl border border-slate-700 transition-colors"
            >
              <PlusCircle className="w-5 h-5 text-blue-400" /> Cadastrar Meu Negócio Gratuitamente
            </button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-indigo-950/40 to-slate-950 -z-10" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-slate-900/80 border border-slate-800 p-12 rounded-3xl shadow-2xl backdrop-blur">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Pronto para dominar as avaliações do Google? 
          </h2>
          <p className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto">
            Garanta hoje mesmo a sua Plaquinha NFC personalizada e coloque sua empresa em destaque na nossa rede de parceiros.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsOrderModalOpen(true)}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/30 text-base"
            >
              Pedir Plaquinha NFC
            </button>
            <button
              onClick={() => setIsRegisterModalOpen(true)}
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium px-8 py-4 rounded-xl border border-slate-700 transition-all text-base"
            >
              Cadastrar na Rede
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
              <QrCode className="w-4 h-4" />
            </div>
            <span className="font-bold text-white">GooglePlaquinha & Rede</span>
            <span className="text-slate-600">|</span>
            <span className="text-xs text-slate-500">© {new Date().getFullYear()} Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
            <a href="#plaquinha" className="hover:text-white transition-colors">A Plaquinha</a>
            <a href="#rede" className="hover:text-white transition-colors">Rede</a>
          </div>
        </div>
      </footer>

      {/* MODAL: Pedir Plaquinha */}
      {isOrderModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl">
            <button 
              onClick={() => setIsOrderModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-2"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold text-white mb-2">Pedir Plaquinha NFC</h3>
            <p className="text-sm text-slate-400 mb-6">Preencha os dados abaixo e entraremos em contato via WhatsApp para finalizar.</p>

            {successMessage ? (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 shrink-0" /> {successMessage}
              </div>
            ) : (
              <form onSubmit={handleOrderSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Seu Nome</label>
                  <input 
                    type="text"
                    required
                    value={orderForm.nome}
                    onChange={e => setOrderForm({...orderForm, nome: e.target.value})}
                    placeholder="Ex: João Silva"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Nome da Empresa / Comércio</label>
                  <input 
                    type="text"
                    required
                    value={orderForm.empresa}
                    onChange={e => setOrderForm({...orderForm, empresa: e.target.value})}
                    placeholder="Ex: Cafeteria Aroma"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">WhatsApp com DDD</label>
                  <input 
                    type="text"
                    required
                    value={orderForm.whatsapp}
                    onChange={e => setOrderForm({...orderForm, whatsapp: e.target.value})}
                    placeholder="Ex: (11) 99999-9999"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Cidade e Estado</label>
                  <input 
                    type="text"
                    required
                    value={orderForm.cidade}
                    onChange={e => setOrderForm({...orderForm, cidade: e.target.value})}
                    placeholder="Ex: São Paulo - SP"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Link do Google Meu Negócio (Maps)</label>
                  <input 
                    type="text"
                    required
                    value={orderForm.googleLink}
                    onChange={e => setOrderForm({...orderForm, googleLink: e.target.value})}
                    placeholder="Ex: https://maps.app.goo.gl/..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/30 mt-2"
                >
                  Enviar Pedido via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* MODAL: Cadastrar Empresa na Rede */}
      {isRegisterModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setIsRegisterModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-2"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold text-white mb-2">Cadastrar na Rede</h3>
            <p className="text-sm text-slate-400 mb-6">Adicione sua empresa na vitrine de parceiros recomendados.</p>

            {successMessage ? (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 shrink-0" /> {successMessage}
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Nome da Empresa</label>
                  <input 
                    type="text"
                    required
                    value={registerForm.name}
                    onChange={e => setRegisterForm({...registerForm, name: e.target.value})}
                    placeholder="Ex: Barbearia Central"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Categoria</label>
                  <select
                    value={registerForm.category}
                    onChange={e => setRegisterForm({...registerForm, category: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Alimentação">Alimentação</option>
                    <option value="Automotivo">Automotivo</option>
                    <option value="Beleza">Beleza</option>
                    <option value="Saúde">Saúde</option>
                    <option value="Serviços">Serviços</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Cidade e Estado</label>
                  <input 
                    type="text"
                    required
                    value={registerForm.city}
                    onChange={e => setRegisterForm({...registerForm, city: e.target.value})}
                    placeholder="Ex: Belo Horizonte - MG"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Link do Google Maps</label>
                  <input 
                    type="text"
                    value={registerForm.googleUrl}
                    onChange={e => setRegisterForm({...registerForm, googleUrl: e.target.value})}
                    placeholder="Ex: https://maps.app.goo.gl/..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Breve Descrição</label>
                  <textarea 
                    rows={3}
                    value={registerForm.description}
                    onChange={e => setRegisterForm({...registerForm, description: e.target.value})}
                    placeholder="Fale um pouco sobre o seu negócio..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <input 
                    type="checkbox"
                    id="hasPlaquinha"
                    checked={registerForm.hasPlaquinha}
                    onChange={e => setRegisterForm({...registerForm, hasPlaquinha: e.target.checked})}
                    className="w-4 h-4 rounded border-slate-800 bg-slate-950 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="hasPlaquinha" className="text-xs text-slate-300">
                    Utilizo a Plaquinha NFC oficial de avaliações
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/30 mt-4"
                >
                  Cadastrar Empresa na Rede
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
