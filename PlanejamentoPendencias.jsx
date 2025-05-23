import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

const pendencias = {
  "PRÉDIO 04": [],
  "PRÉDIO 06": [
    {
      descricao: "Corrigir manta asfáltica em todos os pontos de drenagem",
      material: "Botija de gás + Emulsão",
      sol: "533",
      equipe: "1 profissional + 1 ajudante",
      inicio: "02/06/2025",
      duracao: "A alinhar com Leonardo"
    },
    {
      descricao: "Fazer a vedação inferior do ACM entre ACM e revest. cerâmico",
      material: "Tarucel + PU cinza + fita crepe",
      sol: "433",
      equipe: "1 profissional",
      inicio: "Após chegada do material",
      duracao: "15 dias"
    },
    {
      descricao: "Corrigir vedação sobre portas frontais",
      material: "Silicone acético incolor",
      sol: "-",
      equipe: "1 profissional + 1 ajudante",
      inicio: "27/05/2025",
      duracao: "-"
    },
    {
      descricao: "Corrigir fissuras em pastilhas da fachada frontal",
      material: "Argamassa ACIII + rejunte resinado bege e marrom",
      sol: "-",
      equipe: "1 profissional + 1 ajudante",
      inicio: "07/06/2025",
      duracao: "-"
    },
    {
      descricao: "Revisar todas as calhas e prumadas pluviais",
      material: "PU40 + Prime + manta fria aluminizada",
      sol: "-",
      equipe: "1 profissional + 1 ajudante",
      inicio: "16/06/2025",
      duracao: "-"
    },
    {
      descricao: "Finalizar reforços do ACM na lat. com a Rua Holdercim",
      material: "Parafuso metal metal + F-47 + plat. elevatória",
      sol: "-",
      equipe: "Luiz Lemos (empreita)",
      inicio: "30/05/2025",
      duracao: "13/06/2025"
    },
    {
      descricao: "Fazer a vedação superior e inferior do ACM entre ACM e revest. cerâmico",
      material: "PU40 cinza + Tarucel",
      sol: "433",
      equipe: "1 profissional",
      inicio: "30/05/2025",
      duracao: "13/06/2025"
    }
  ],
  "PRÉDIO 07": [
    {
      descricao: "Corrigir manta asfáltica em todos os pontos de drenagem",
      material: "Botija de gás + Emulsão",
      sol: "533",
      equipe: "1 profissional + 1 ajudante",
      inicio: "02/06/2025",
      duracao: "-"
    },
    {
      descricao: "Corrigir nível para escoagem de água",
      material: "Areia + Cimento",
      sol: "-",
      equipe: "2 pedreiros + 2 ajudantes",
      inicio: "04/06/2025",
      duracao: "06/06/2025"
    },
    {
      descricao: "Trocar perfil alumínio da 1ª porta de entrada",
      material: "Perfil alumínio preto 10x10x210cm",
      sol: "-",
      equipe: "Vinícius Dalvi (empreita)",
      inicio: "19/06/2025",
      duracao: "-"
    },
    {
      descricao: "Corrigir prumada pluvial danificada na loja âncora do térreo",
      material: "Joelho + luva PVC esgoto 150mm + cola + areia + cimento",
      sol: "-",
      equipe: "Martelo romped. / 1 bombeiro hidráulico + 1 ajudante",
      inicio: "09/06/2025",
      duracao: "-"
    },
    {
      descricao: "Desmontar canteiro, retirar materiais e limpar a loja âncora do térreo",
      material: "Caçamba (descarte) + Munck (mov. materiais úteis)",
      sol: "-",
      equipe: "4 ajudantes",
      inicio: "23/06/2025",
      duracao: "26/06/2025"
    },
    {
      descricao: "Instalar vitrine",
      material: "Vidro temperado incolor 10mm",
      sol: "-",
      equipe: "Vinícius Dalvi (empreita)",
      inicio: "27/06/2025",
      duracao: "-"
    }
  ]
}

export default function PlanejamentoPendencias() {
  return (
    <Tabs defaultValue="PRÉDIO 06" className="w-full">
      <TabsList className="mb-4">
        {Object.keys(pendencias).map((predio) => (
          <TabsTrigger key={predio} value={predio}>{predio}</TabsTrigger>
        ))}
      </TabsList>

      {Object.entries(pendencias).map(([predio, tarefas]) => (
        <TabsContent key={predio} value={predio}>
          {tarefas.length === 0 ? (
            <p className="text-gray-500">Sem pendências.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tarefas.map((tarefa, index) => (
                <Card key={index}>
                  <CardContent className="p-4 space-y-2">
                    <p><strong>Serviço:</strong> {tarefa.descricao}</p>
                    <p><strong>Material:</strong> {tarefa.material}</p>
                    <p><strong>SOL:</strong> {tarefa.sol}</p>
                    <p><strong>Equipe:</strong> {tarefa.equipe}</p>
                    <p><strong>Início:</strong> {tarefa.inicio}</p>
                    <p><strong>Duração:</strong> {tarefa.duracao}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
}
