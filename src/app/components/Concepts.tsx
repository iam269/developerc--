import React from 'react';
import { motion } from 'motion/react';
import { CodeBlock } from './CodeBlock';
import { Box, Layers, Zap, Database, ArrowRight, Repeat, Hash, Brackets, List, Cpu, Shield, FileCode, Folder, Settings } from 'lucide-react';

const concepts = [
  {
    title: 'Variabile și Tipuri de Date',
    description: 'C++ oferă tipuri de date primitive (int, float, double, char, bool) și posibilitatea de a crea tipuri personalizate.',
    icon: Hash,
    code: `// Tipuri de date fundamentale
int numar = 42;           // Integer
double pret = 19.99;      // Double precision
char litera = 'A';        // Character
bool activ = true;        // Boolean
std::string text = "Bine"; // String

// Constanta
const int MAX_SIZE = 100;`
  },
  {
    title: 'Controlul Fluxului',
    description: 'Instrucțiuni condiționale și bucle pentru controlul execuției programului.',
    icon: ArrowRight,
    code: `// If-else
if (x > 10) {
    std::cout << "Mai mare" << std::endl;
} else if (x > 5) {
    std::cout << "Mediu" << std::endl;
} else {
    std::cout << "Mic" << std::endl;
}

// Switch
switch (optiune) {
    case 1: std::cout << "Unu"; break;
    case 2: std::cout << "Doi"; break;
    default: std::cout << "Altceva";
}`
  },
  {
    title: 'Bucle (Loops)',
    description: 'C++ oferă mai multe tipuri de bucle: for, while, do-while pentru iterarea prin date.',
    icon: Repeat,
    code: `// For loop clasic
for (int i = 0; i < 5; i++) {
    std::cout << i << " ";
}

// Range-based for
std::vector<int> nums = {1, 2, 3};
for (int n : nums) {
    std::cout << n << " ";
}

// While
while (conditie) {
    // executa cat timp e adevarat
}`
  },
  {
    title: 'Funcții',
    description: 'Unități de cod reutilizabile care pot primi parametri și pot returna valori.',
    icon: Settings,
    code: `// Functie simpla
int suma(int a, int b) {
    return a + b;
}

// Functie cu parametri referinta
void modifica(int& x) {
    x = x * 2;
}

// Functie cu parametri default
int produs(int a, int b = 1) {
    return a * b;
}`
  },
  {
    title: 'Pointeri și Referințe',
    description: 'Control direct asupra memoriei prin pointeri și referințe pentru eficiență maximă.',
    icon: Cpu,
    code: `int var = 10;
int* ptr = &var;  // Pointer catre adresa

std::cout << var;   // Valoarea: 10
std::cout << ptr;   // Adresa: 0x...
std::cout << *ptr;  // Dereferentiere: 10

// Referinta (alias)
int& ref = var;
ref = 20;  // var devine 20`
  },
  {
    title: 'Structuri și Clase',
    description: 'Structurile sunt tipuri de date compuse, iar clasele adaugă encapsulare și funcții membre.',
    icon: Brackets,
    code: `// Structura
struct Persoana {
    std::string nume;
    int varsta;
};

// Clasa
class ContBancar {
private:
    double sold;
public:
    void depune(double suma) {
        sold += suma;
    }
    double getSold() const {
        return sold;
    }
};`
  },
  {
    title: 'Moștenire (Inheritance)',
    description: 'Clasele pot mosteni proprietăți și metode de la alte clase, creând ierarhii.',
    icon: Folder,
    code: `class Animal {
public:
    void mananca() { }
};

class Caine : public Animal {
public:
    void latra() {
        std::cout << "Ham!" << std::endl;
    }
};

Caine c;
c.mananca();  // Mostenit de la Animal
c.latra();    // Propriu`
  },
  {
    title: 'Polimorfism',
    description: 'Același cod poate comporta diferit în funcție de tipul obiectului.',
    icon: List,
    code: `class Forma {
public:
    virtual void deseneaza() = 0; // Pur virtual
};

class Cerc : public Forma {
    void deseneaza() override {
        std::cout << "Desenez cerc" << std::endl;
    }
};

class Patrat : public Forma {
    void deseneaza() override {
        std::cout << "Desenez patrat" << std::endl;
    }
};`
  },
  {
    title: 'Programare Orientată pe Obiect (OOP)',
    description: 'C++ suportă clase, moștenire, polimorfism și încapsulare, permițând modelarea complexă a sistemelor.',
    icon: Box,
    code: `class Engine {
public:
  void start() {
    std::cout << "Engine started" << std::endl;
  }
};

class Car : public Engine {
  // Moștenire
};`
  },
  {
    title: 'Programare Generică (Templates)',
    description: 'Template-urile permit scrierea unui cod flexibil care funcționează cu orice tip de date.',
    icon: Layers,
    code: `template <typename T>
T add(T a, T b) {
  return a + b;
}

auto result = add(5, 10);    // int
auto res2 = add(5.5, 2.1);  // double

// Template cu mai multe tipuri
template <typename T, typename U>
auto max(T a, U b) {
    return (a > b) ? a : b;
}`
  },
  {
    title: 'STL - Standard Template Library',
    description: 'Colecții și algoritmi preconstruiți pentru manipularea eficientă a datelor.',
    icon: Database,
    code: `#include <vector>
#include <map>
#include <algorithm>

std::vector<int> vec = {5, 2, 8, 1};
std::sort(vec.begin(), vec.end()); // 1,2,5,8

std::map<std::string, int> note;
note["Ana"] = 10;
note["Bob"] = 9;

for (const auto& [n, v] : note) {
    std::cout << n << ": " << v;
}`
  },
  {
    title: 'Gestionarea Excepțiilor',
    description: 'Mecanism robust pentru gestionarea erorilor și situațiilor neprevăzute.',
    icon: Shield,
    code: `try {
    int rezultat = imparte(a, b);
    std::cout << rezultat;
} catch (const std::exception& e) {
    std::cerr << "Eroare: " << e.what();
} catch (...) {
    std::cerr << "Eroare necunoscuta";
}

// Throw custom
throw std::runtime_error("Mesaj de eroare");`
  },
  {
    title: 'Gestionarea Memoriei',
    description: 'Control direct asupra resurselor sistemului cu RAII și Smart Pointers.',
    icon: Zap,
    code: `#include <memory>

// Smart Pointer - eliberare automata
auto ptr = std::make_unique<Data>();

// Shared Pointer
auto shared = std::make_shared<int>(42);

// Raw pointer - manual
int* raw = new int[100];
delete[] raw;  // Nu uita!

// RAII cu clasa
class Resource {
public:
    ~Resource() { cleanup(); }
};`
  },
  {
    title: 'I/O cu Fișiere',
    description: 'Citire și scriere din/in fișiere pentru persistența datelor.',
    icon: FileCode,
    code: `#include <fstream>

// Scriere in fisier
std::ofstream fout("date.txt");
fout << "Nume: Ana" << std::endl;
fout << "Varsta: 25" << std::endl;
fout.close();

// Citire din fisier
std::ifstream fin("date.txt");
std::string linie;
while (std::getline(fin, linie)) {
    std::cout << linie << std::endl;
}
fin.close();`
  }
];

export const Concepts = () => {
  return (
    <section id="concepts" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Concepte Fundamentale</h2>
            <p className="text-white/60">Arhitectura limbajului este construită pe principiul eficienței maxime și al libertății totale pentru dezvoltator.</p>
          </div>
          <div className="text-cyan-400 font-mono text-sm">{"std::cout << \"Unleash Power\";"}</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {concepts.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-6 mb-8">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <c.icon size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{c.title}</h3>
                  <p className="text-white/60 leading-relaxed mb-6">{c.description}</p>
                </div>
              </div>
              <CodeBlock code={c.code} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
