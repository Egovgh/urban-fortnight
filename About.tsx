import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, User, Coffee, Code, Zap } from 'lucide-react';

const About: React.FC = () => {
  const [currentCommand, setCurrentCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const commands = [
    'whoami',
    'ls -la experience/',
    'cat mission.txt',
    'ps aux | grep passion',
    'history | tail -5'
  ];

  const commandOutputs: { [key: string]: string[] } = {
    'whoami': [
      'askqris@innovation:~$ whoami',
      'Senior Full Stack Developer & Tech Innovator',
      'Specializing in cutting-edge smartwatch technology',
      'Passionate about creating seamless digital experiences',
      ''
    ],
    'ls -la experience/': [
      'askqris@innovation:~$ ls -la experience/',
      'total 42',
      'drwxr-xr-x  8 askqris dev  4096 Dec 2024 .',
      'drwxr-xr-x  3 askqris dev  4096 Dec 2024 ..',
      '-rw-r--r--  1 askqris dev  2048 Dec 2024 frontend_mastery.log',
      '-rw-r--r--  1 askqris dev  1536 Dec 2024 backend_expertise.log',
      '-rw-r--r--  1 askqris dev  3072 Dec 2024 ui_ux_portfolio.zip',
      '-rw-r--r--  1 askqris dev  4096 Dec 2024 smartwatch_innovation.tar.gz',
      ''
    ],
    'cat mission.txt': [
      'askqris@innovation:~$ cat mission.txt',
      '╔═══════════════════════════════════════════════╗',
      '║              MISSION STATEMENT                ║',
      '╠═══════════════════════════════════════════════╣',
      '║ Bridging the gap between imagination and      ║',
      '║ reality through innovative technology         ║',
      '║ solutions. Committed to crafting experiences  ║',
      '║ that not only meet user needs but exceed      ║',
      '║ their wildest expectations.                   ║',
      '╚═══════════════════════════════════════════════╝',
      ''
    ],
    'ps aux | grep passion': [
      'askqris@innovation:~$ ps aux | grep passion',
      'askqris  1001  0.8  2.1  problem_solving     00:24:07 [active]',
      'askqris  1002  1.2  3.4  continuous_learning 01:45:32 [running]',
      'askqris  1003  0.6  1.8  user_experience     00:18:41 [optimizing]',
      'askqris  1004  2.1  4.7  innovation          02:36:15 [creating]',
      ''
    ],
    'history | tail -5': [
      'askqris@innovation:~$ history | tail -5',
      '  998  git commit -m "Implemented quantum UI patterns"',
      '  999  npm run deploy --environment=production',
      ' 1000  docker-compose up -d smartwatch-services',
      ' 1001  pytest tests/ --coverage=95%',
      ' 1002  vim README.md # Document the future',
      ''
    ]
  };

  useEffect(() => {
    const runCommands = async () => {
      for (let i = 0; i < commands.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setIsTyping(true);
        const command = commands[i];
        
        // Simulate typing
        for (let j = 0; j <= command.length; j++) {
          setCurrentCommand(command.slice(0, j));
          await new Promise(resolve => setTimeout(resolve, 50));
        }
        
        setIsTyping(false);
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Add command and output to history
        const output = commandOutputs[command] || [`Command not found: ${command}`];
        setCommandHistory(prev => [...prev, ...output]);
        setCurrentCommand('');
      }
    };

    runCommands();
  }, []);

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold font-['Space_Grotesk'] mb-6 bg-gradient-to-r from-pink-500 to-green-400 bg-clip-text text-transparent">
            Terminal Interface
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Execute commands to discover my journey, skills, and passion for technology
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center justify-between bg-gray-800 px-4 py-3 border-b border-gray-700">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <Terminal size={16} className="text-gray-400" />
                <span className="text-sm text-gray-400 font-mono">askqris@innovation:~</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>Shell: zsh</span>
                <span>PWD: ~/about</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="bg-black p-6 font-mono text-sm min-h-[400px] max-h-[600px] overflow-y-auto">
              <div className="text-green-400">
                {commandHistory.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`mb-1 ${line.startsWith('askqris@innovation:~$') ? 'text-cyan-400' : 'text-green-400'}`}
                  >
                    {line}
                  </motion.div>
                ))}
                
                {/* Current command being typed */}
                <div className="flex items-center text-cyan-400">
                  <span>askqris@innovation:~$ </span>
                  <span>{currentCommand}</span>
                  {isTyping && (
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="ml-1 bg-green-400 w-2 h-4 inline-block"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Code, label: 'Projects', value: '50+', color: 'cyan' },
              { icon: User, label: 'Experience', value: '5+ Years', color: 'pink' },
              { icon: Coffee, label: 'Coffee Cups', value: '∞', color: 'green' },
              { icon: Zap, label: 'Innovation', value: '100%', color: 'yellow' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800"
              >
                <stat.icon size={32} className={`mx-auto mb-3 text-${stat.color}-400`} />
                <div className={`text-2xl font-bold text-${stat.color}-400 mb-1`}>{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;