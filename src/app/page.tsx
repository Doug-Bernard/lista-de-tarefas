import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Plus, List, ArrowDownRight, Check, SquarePen, Trash } from 'lucide-react';


const Home = () =>{
  return(
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">    
    <Card className="w-lg">
      <CardHeader className="flex gap-2">
      <Input placeholder="Adicionar tarefa" />
    <Button className="cursor-pointer"><Plus />Adicionar</Button>
      </CardHeader>



<CardContent>
  <Separator className="mb-4" />

  <div className="flex gap-1">
 <Badge className="cursor-pointer"><List />Todos</Badge>
 <Badge className="cursor-pointer"><ArrowDownRight />Não Finalizadas</Badge>
 <Badge className="cursor-pointer"><Check />Concluídas</Badge>
</div>

<div className="mt-4 ">
  <div className=" h-12 flex justify-between items-center">
    <div className="w-2 h-full bg-green-300"></div>
    <p className="flex-1 px-1">Estudar React</p>
    <div className="flex gap-4 items-center">
    <SquarePen />
    <Trash />
    </div>
  </div>
</div>

</CardContent>
      
</Card>
</main> 
    
  )
}

export default Home;  