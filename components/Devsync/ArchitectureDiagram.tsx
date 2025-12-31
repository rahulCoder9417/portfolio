import React from 'react';

interface ArchitectureDiagramProps {
  className?: string;
}

export  function ArchitectureDiagram({ className = "" }: ArchitectureDiagramProps) {
  return (
    <div className={`project-scope w-full ${className}`}>
      <div className="w-full aspect-[21/9] rounded-xl relative overflow-hidden " 
           style={{
             background: 'linear-gradient(145deg, hsl(220 20% 6%), hsl(220 18% 8%))',
             border: '1px solid hsl(220 15% 18%)'
           }}>
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(210 20% 95% / 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(210 20% 95% / 0.1) 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
        
        {/* Main content container */}
        <div className="relative h-full flex flex-col justify-between p-6 gap-2">
          
          {/* ==================== LAYER 1: CLIENT (BROWSER) ==================== */}
          <div className="flex flex-col gap-1.5">
            <div className="text-[9px] project-font-mono tracking-widest opacity-60" 
                 style={{color: 'hsl(210 60% 70%)'}}>
              CLIENT LAYER
            </div>
            <div className="relative rounded-lg p-3 project-glow-subtle" 
                 style={{
                   background: 'linear-gradient(135deg, hsl(220 18% 11%), hsl(220 16% 9%))',
                   border: '1px solid hsl(210 50% 45% / 0.3)',
                   boxShadow: '0 0 30px -8px hsl(210 60% 50% / 0.3)'
                 }}>
              <div className="flex items-center gap-2.5 flex-wrap">
                <div className="px-3 py-1.5 rounded-md text-[9px] project-font-mono font-medium"
                     style={{
                       background: 'hsl(210 60% 50% / 0.15)',
                       border: '1px solid hsl(210 60% 50% / 0.4)',
                       color: 'hsl(210 70% 75%)',
                       boxShadow: '0 0 20px hsl(210 60% 50% / 0.2)'
                     }}>
                  Browser IDE
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {['Code Editor', 'Terminal (xterm)', 'File Explorer', 'Chat', 'Preview Panel', 'GUI Viewer (noVNC)'].map((item, i) => (
                    <div key={i} className="px-2 py-0.5 rounded text-[7px] project-font-mono"
                         style={{
                           background: 'hsl(220 15% 15%)',
                           border: '1px solid hsl(220 15% 22%)',
                           color: 'hsl(215 15% 70%)'
                         }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Connection arrows from Client */}
          <div className="flex justify-around items-center px-8 -my-0.5">
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-px h-3.5 rounded-full" 
                   style={{
                     background: 'linear-gradient(to bottom, hsl(280 70% 60% / 0.6), hsl(280 70% 60% / 0.2))',
                     boxShadow: '0 0 8px hsl(280 70% 60% / 0.4)'
                   }}></div>
              <div className="text-[6.5px] project-font-mono font-medium" 
                   style={{color: 'hsl(280 70% 70%)'}}>
                WS: Chat
              </div>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-px h-3.5 rounded-full" 
                   style={{
                     background: 'linear-gradient(to bottom, hsl(190 70% 55% / 0.6), hsl(190 70% 55% / 0.2))',
                     boxShadow: '0 0 8px hsl(190 70% 55% / 0.4)'
                   }}></div>
              <div className="text-[6.5px] project-font-mono font-medium" 
                   style={{color: 'hsl(190 70% 70%)'}}>
                WS: File CRUD + Awareness
              </div>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-px h-3.5 rounded-full" 
                   style={{
                     background: 'linear-gradient(to bottom, hsl(140 65% 55% / 0.6), hsl(140 65% 55% / 0.2))',
                     boxShadow: '0 0 8px hsl(140 65% 55% / 0.4)'
                   }}></div>
              <div className="text-[6.5px] project-font-mono font-medium" 
                   style={{color: 'hsl(140 65% 70%)'}}>
                SSE: Git Import
              </div>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-px h-3.5 rounded-full" 
                   style={{
                     background: 'linear-gradient(to bottom, hsl(45 85% 60% / 0.6), hsl(45 85% 60% / 0.2))',
                     boxShadow: '0 0 8px hsl(45 85% 60% / 0.4)'
                   }}></div>
              <div className="text-[6.5px] project-font-mono font-medium" 
                   style={{color: 'hsl(45 85% 70%)'}}>
                WS: Terminal I/O
              </div>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-px h-3.5 rounded-full" 
                   style={{
                     background: 'linear-gradient(to bottom, hsl(330 70% 60% / 0.6), hsl(330 70% 60% / 0.2))',
                     boxShadow: '0 0 8px hsl(330 70% 60% / 0.4)'
                   }}></div>
              <div className="text-[6.5px] project-font-mono font-medium" 
                   style={{color: 'hsl(330 70% 70%)'}}>
                WS: GUI (websockify)
              </div>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-px h-3.5 rounded-full" 
                   style={{
                     background: 'linear-gradient(to bottom, hsl(20 80% 60% / 0.6), hsl(20 80% 60% / 0.2))',
                     boxShadow: '0 0 8px hsl(20 80% 60% / 0.4)'
                   }}></div>
              <div className="text-[6.5px] project-font-mono font-medium" 
                   style={{color: 'hsl(20 80% 70%)'}}>
                WS: Project Proxy
              </div>
            </div>
          </div>

          {/* ==================== LAYER 2A: NEXT.JS BACKEND ==================== */}
          <div className="flex gap-2">
            <div className="flex-[0.35] flex flex-col gap-1.5">
              <div className="text-[9px] project-font-mono tracking-widest opacity-60" 
                   style={{color: 'hsl(260 60% 70%)'}}>
                NEXT.JS API
              </div>
              <div className="relative rounded-lg p-2.5" 
                   style={{
                     background: 'linear-gradient(135deg, hsl(260 25% 12%), hsl(260 20% 10%))',
                     border: '1px solid hsl(260 40% 35% / 0.3)'
                   }}>
                <div className="flex flex-col gap-1.5">
                  <div className="text-[7.5px] project-font-mono" 
                       style={{color: 'hsl(260 50% 75%)'}}>
                    Basic DB Operations
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {['Auth', 'User CRUD', 'Teams', 'Projects'].map((item, i) => (
                      <div key={i} className="px-1.5 py-0.5 rounded text-[6.5px] project-font-mono"
                           style={{
                             background: 'hsl(260 30% 18%)',
                             border: '1px solid hsl(260 30% 25%)',
                             color: 'hsl(260 40% 70%)'
                           }}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ==================== LAYER 2B: MAIN BACKEND ==================== */}
            <div className="flex-[0.65] flex flex-col gap-1.5">
              <div className="text-[9px] project-font-mono tracking-widest opacity-60" 
                   style={{color: 'hsl(18 90% 70%)'}}>
                MAIN BACKEND 
              </div>
              <div className="relative rounded-lg p-2.5 project-glow" 
                   style={{
                     background: 'linear-gradient(135deg, hsl(18 40% 14%), hsl(18 35% 11%))',
                     border: '1px solid hsl(18 90% 55% / 0.4)',
                     boxShadow: '0 0 35px -10px hsl(18 90% 55% / 0.4)'
                   }}>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <div className="px-2 py-1 rounded text-[7.5px] project-font-mono font-medium"
                         style={{
                           background: 'hsl(280 70% 50% / 0.2)',
                           border: '1px solid hsl(280 70% 50% / 0.5)',
                           color: 'hsl(280 70% 80%)',
                           boxShadow: '0 0 12px hsl(280 70% 50% / 0.3)'
                         }}>
                      WS Server: Chat
                    </div>
                    <div className="text-[6px] project-font-mono" 
                         style={{color: 'hsl(220 15% 60%)'}}>
                      Team Chat · DMs · Read States · Typing
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <div className="px-2 py-1 rounded text-[7.5px] project-font-mono font-medium"
                         style={{
                           background: 'hsl(190 70% 50% / 0.2)',
                           border: '1px solid hsl(190 70% 50% / 0.5)',
                           color: 'hsl(190 70% 80%)',
                           boxShadow: '0 0 12px hsl(190 70% 50% / 0.3)'
                         }}>
                      WS Server: Collaboration
                    </div>
                    <div className="text-[6px] project-font-mono" 
                         style={{color: 'hsl(220 15% 60%)'}}>
                      File CRUD · Awareness (cursor, selection, scroll) · Voting
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <div className="px-2 py-1 rounded text-[7.5px] project-font-mono font-medium"
                         style={{
                           background: 'hsl(140 65% 50% / 0.2)',
                           border: '1px solid hsl(140 65% 50% / 0.5)',
                           color: 'hsl(140 65% 80%)',
                           boxShadow: '0 0 12px hsl(140 65% 50% / 0.3)'
                         }}>
                      SSE Stream
                    </div>
                    <div className="text-[6px] project-font-mono" 
                         style={{color: 'hsl(220 15% 60%)'}}>
                      Git Repository Ingestion Progress
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <div className="px-2 py-1 rounded text-[7.5px] project-font-mono font-medium"
                         style={{
                           background: 'hsl(35 80% 55% / 0.2)',
                           border: '1px solid hsl(35 80% 55% / 0.5)',
                           color: 'hsl(35 80% 80%)',
                           boxShadow: '0 0 12px hsl(35 80% 55% / 0.3)'
                         }}>
                      WS Client: Secondary Backend
                    </div>
                    <div className="text-[6px] project-font-mono" 
                         style={{color: 'hsl(220 15% 60%)'}}>
                      File CRUD Events for Disk Sync
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Connection arrows to Secondary Backend and Database */}
          <div className="flex justify-around items-center px-6 -my-0.5">
            <div className="flex flex-col items-center gap-0.5">
             
             
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-px h-3.5 rounded-full" 
                   style={{
                     background: 'linear-gradient(to bottom, hsl(160 60% 55% / 0.6), hsl(160 60% 55% / 0.2))',
                     boxShadow: '0 0 8px hsl(160 60% 55% / 0.4)'
                   }}></div>
              <div className="text-[6.5px] project-font-mono font-medium" 
                   style={{color: 'hsl(160 60% 70%)'}}>
                Write/Read
              </div>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-px h-3.5 rounded-full" 
                   style={{
                     background: 'linear-gradient(to bottom, hsl(340 70% 60% / 0.6), hsl(340 70% 60% / 0.2))',
                     boxShadow: '0 0 8px hsl(340 70% 60% / 0.4)'
                   }}></div>
              <div className="text-[6.5px] project-font-mono font-medium" 
                   style={{color: 'hsl(340 70% 70%)'}}>
                Upload Binary
              </div>
            </div>
          </div>

          {/* ==================== LAYER 3: SECONDARY EXECUTION BACKEND ==================== */}
          <div className="flex flex-col gap-1.5">
            <div className="text-[9px] project-font-mono tracking-widest opacity-60" 
                 style={{color: 'hsl(35 85% 70%)'}}>
              SECONDARY EXECUTION BACKEND (Docker)
            </div>
            <div className="relative rounded-lg p-2.5 project-glow" 
                 style={{
                   background: 'linear-gradient(135deg, hsl(25 40% 13%), hsl(25 35% 10%))',
                   border: '1px solid hsl(35 80% 55% / 0.4)',
                   boxShadow: '0 0 35px -10px hsl(35 80% 55% / 0.4)'
                 }}>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <div className="px-2 py-1 rounded text-[7.5px] project-font-mono font-medium"
                       style={{
                         background: 'hsl(45 85% 55% / 0.2)',
                         border: '1px solid hsl(45 85% 55% / 0.5)',
                         color: 'hsl(45 85% 80%)',
                         boxShadow: '0 0 12px hsl(45 85% 55% / 0.3)'
                       }}>
                    WS: node-pty (Terminal)
                  </div>
                  <div className="text-[6px] project-font-mono" 
                       style={{color: 'hsl(220 15% 60%)'}}>
                    ↔ Client xterm bidirectional I/O
                  </div>
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <div className="px-2 py-1 rounded text-[7.5px] project-font-mono font-medium"
                       style={{
                         background: 'hsl(35 80% 55% / 0.2)',
                         border: '1px solid hsl(35 80% 55% / 0.5)',
                         color: 'hsl(35 80% 80%)',
                         boxShadow: '0 0 12px hsl(35 80% 55% / 0.3)'
                       }}>
                    WS: File CRUD Listener
                  </div>
                  <div className="text-[6px] project-font-mono" 
                       style={{color: 'hsl(220 15% 60%)'}}>
                    ← Main Backend file events · Disk mirror updates
                  </div>
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <div className="px-2 py-1 rounded text-[7.5px] project-font-mono font-medium"
                       style={{
                         background: 'hsl(330 70% 55% / 0.2)',
                         border: '1px solid hsl(330 70% 55% / 0.5)',
                         color: 'hsl(330 70% 80%)',
                         boxShadow: '0 0 12px hsl(330 70% 55% / 0.3)'
                       }}>
                    WS: GUI (websockify)
                  </div>
                  <div className="text-[6px] project-font-mono" 
                       style={{color: 'hsl(220 15% 60%)'}}>
                    Xvfb · Fluxbox · x11vnc → noVNC ↔ Client
                  </div>
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <div className="px-2 py-1 rounded text-[7.5px] project-font-mono font-medium"
                       style={{
                         background: 'hsl(20 80% 55% / 0.2)',
                         border: '1px solid hsl(20 80% 55% / 0.5)',
                         color: 'hsl(20 80% 80%)',
                         boxShadow: '0 0 12px hsl(20 80% 55% / 0.3)'
                       }}>
                    WS: Project Proxy Piping
                  </div>
                  <div className="text-[6px] project-font-mono" 
                       style={{color: 'hsl(220 15% 60%)'}}>
                    Local Docker WS ↔ Client (dev server, built apps)
                  </div>
                </div>
                <div className="flex items-center gap-1.5 flex-wrap mt-0.5">
                  <div className="px-2 py-1 rounded text-[7.5px] project-font-mono"
                       style={{
                         background: 'hsl(40 60% 50% / 0.15)',
                         border: '1px solid hsl(40 60% 50% / 0.35)',
                         color: 'hsl(40 60% 75%)'
                       }}>
                    Non-Persistent Disk Storage
                  </div>
                  <div className="text-[6px] project-font-mono" 
                       style={{color: 'hsl(220 15% 60%)'}}>
                    Runtime FS · Downloaded assets from Cloudinary URLs
                  </div>
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <div className="px-2 py-1 rounded text-[7.5px] project-font-mono"
                       style={{
                         background: 'hsl(270 50% 50% / 0.15)',
                         border: '1px solid hsl(270 50% 50% / 0.35)',
                         color: 'hsl(270 50% 75%)'
                       }}>
                    Static Server
                  </div>
                  <div className="text-[6px] project-font-mono" 
                       style={{color: 'hsl(220 15% 60%)'}}>
                    /projectId · Preview proxy for backends/frontends
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Connection arrows to Database and Cloud */}
          <div className="flex justify-around items-center -my-0.5 px-12">
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-px h-3 rounded-full" 
                   style={{
                     background: 'linear-gradient(to bottom, hsl(160 60% 55% / 0.6), hsl(160 60% 55% / 0.2))',
                     boxShadow: '0 0 8px hsl(160 60% 55% / 0.4)'
                   }}></div>
              <div className="text-[6.5px] project-font-mono font-medium" 
                   style={{color: 'hsl(160 60% 70%)'}}>
                Read
              </div>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-px h-3 rounded-full" 
                   style={{
                     background: 'linear-gradient(to bottom, hsl(340 70% 60% / 0.6), hsl(340 70% 60% / 0.2))',
                     boxShadow: '0 0 8px hsl(340 70% 60% / 0.4)'
                   }}></div>
              <div className="text-[6.5px] project-font-mono font-medium" 
                   style={{color: 'hsl(340 70% 70%)'}}>
                Download
              </div>
            </div>
          </div>

          {/* ==================== LAYER 4 & 5: DATABASE + CLOUD STORAGE ==================== */}
          <div className="flex gap-2.5">
            {/* Database */}
            <div className="flex-1 flex flex-col gap-1.5">
              <div className="text-[9px] project-font-mono tracking-widest opacity-60" 
                   style={{color: 'hsl(160 60% 70%)'}}>
                DATABASE (PostgreSQL)
              </div>
              <div className="relative rounded-lg p-2.5" 
                   style={{
                     background: 'linear-gradient(135deg, hsl(160 30% 12%), hsl(160 25% 9%))',
                     border: '1px solid hsl(160 50% 40% / 0.3)'
                   }}>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    'User · Teams · Projects',
                    'File Metadata · Content',
                    'Chat Messages · DMs',
                    'Friendships · Requests',
                    'TeamMembers · Bans',
                    'Notifications · Read States',
                    'Binary Asset URLs',
                    'Git Import Keys'
                  ].map((item, i) => (
                    <div key={i} className="px-1.5 py-1 rounded text-[6.5px] project-font-mono"
                         style={{
                           background: 'hsl(160 25% 14%)',
                           border: '1px solid hsl(160 25% 20%)',
                           color: 'hsl(160 40% 70%)'
                         }}>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-2 pt-2" style={{borderTop: '1px solid hsl(160 25% 20%)'}}>
                  <div className="text-[6px] project-font-mono italic" 
                       style={{color: 'hsl(160 30% 55%)'}}>
                    Single Source of Truth · All file content persisted
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cloud Storage */}
            <div className="flex-1 flex flex-col gap-1.5">
              <div className="text-[9px] project-font-mono tracking-widest opacity-60" 
                   style={{color: 'hsl(340 70% 70%)'}}>
                CLOUD STORAGE (Cloudinary)
              </div>
              <div className="relative rounded-lg p-2.5" 
                   style={{
                     background: 'linear-gradient(135deg, hsl(340 30% 12%), hsl(340 25% 9%))',
                     border: '1px solid hsl(340 60% 45% / 0.3)'
                   }}>
                <div className="flex flex-col gap-1.5">
                  <div className="px-2 py-1 rounded text-[7.5px] project-font-mono font-medium"
                       style={{
                         background: 'hsl(340 70% 50% / 0.15)',
                         border: '1px solid hsl(340 70% 50% / 0.35)',
                         color: 'hsl(340 70% 80%)'
                       }}>
                    CDN Asset Storage
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {['Images (PNG, JPG, SVG)', 'Videos (MP4, WebM)', 'Audio (MP3, WAV)', 'Documents (PDF, DOCX)'].map((item, i) => (
                      <div key={i} className="px-1.5 py-0.5 rounded text-[6.5px] project-font-mono"
                           style={{
                             background: 'hsl(340 25% 14%)',
                             border: '1px solid hsl(340 25% 20%)',
                             color: 'hsl(340 40% 70%)'
                           }}>
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-1 pt-1.5" style={{borderTop: '1px solid hsl(340 25% 20%)'}}>
                    <div className="text-[6px] project-font-mono italic" 
                         style={{color: 'hsl(340 30% 55%)'}}>
                      URLs stored in DB · Assets downloaded by Secondary Backend
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        
        {/* Bottom label */}
        <div className="absolute bottom-2.5 left-3 flex items-center gap-2 opacity-40">
          <div className="w-1.5 h-1.5 rounded-full" 
               style={{background: 'hsl(18 90% 55%)', boxShadow: '0 0 8px hsl(18 90% 55%)'}}></div>
          <span className="text-[8px] project-font-mono" style={{color: 'hsl(215 15% 55%)'}}>
            devsync-distributed-architecture.diagram
          </span>
        </div>

        {/* Version indicator */}
        <div className="absolute bottom-2.5 right-3 text-[7px] project-font-mono opacity-30" 
             style={{color: 'hsl(215 15% 55%)'}}>
          v2.0.production
        </div>
      </div>
    </div>
  );
}