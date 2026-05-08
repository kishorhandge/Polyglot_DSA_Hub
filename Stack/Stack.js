class Node
{   
    constructor(no)
    {
        this.data = no;
        this.next = null;
    }
}

class Stack
{
    constructor()
    {
        console.log("Object of  Stack gets created :")

        this.first = null;
        this.iCount = 0;
    }

    Push(no)
    {
        let newn = null;

        newn = new Node(no);

        if(this.first == null)
        {
            this.first = newn;
        }
        else
        {
            newn.next = this.first;
            this.first = newn;
        }

        this.iCount++;
    }
     
    Pop()
    {
        let temp = null;

        if(this.first == null)
        {
            return;
        }
        else if(this.first.next == null)
        {
            this.first = null;
        }
        else
        {
            temp = this.first;

            this.first = this.first.next;
        }
        this.iCount--;
    }

     
    Display()
    {
        let temp = null;

        temp = this.first;

        while (temp != null) 
        {
            process.stdout.write("| " + temp.data + " |\n");
            temp = temp.next;
        }
        console.log();
    }
    Count()
    {
        return this.iCount;
    }

    Peep()
    {   
        let temp = null;

        temp = this.first;

        let iValue = 0;

        if(temp == null)
        {
            console.log("Stack is empty");
            return -1;
        }    

        iValue = temp.data

        return iValue
    }
        
}

function main()
{
    let obj = new Stack();

    iRet = 0;

    obj.Push(51);
    obj.Push(41);
    obj.Push(31);
    obj.Push(21);
    obj.Push(11);

    obj.Display();

    iRet = obj.Count();

    console.log("Number of nodes are: "+iRet);

    obj.Pop();

    obj.Display();

    iRet = obj.Count();

    console.log("Number of nodes are: "+iRet);

    iRet = obj.Peep();

    console.log("Top Node from Stack is :",iRet);

}
main();