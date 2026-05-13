class Node
{   
    constructor(no)
    {
        this.data = no;
        this.next = null;
    }
}

class Queue
{
    constructor()
    {
        console.log("Object of  Queue gets created :")

        this.first = null;
        this.iCount = 0;
    }

    Enqueue(no)
    {
        let newn = null;
        let temp = null;

        newn = new Node(no);

        if(this.first == null)
        {
            this.first = newn;
        }
        else
        {
            temp = this.first;
            
            while(temp.next != null)
            {
                temp = temp.next;
            }
            temp.next = newn;
        }

        this.iCount++;
    }
     
    Dequeue()
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
            process.stdout.write("| " + temp.data + " |");
            temp = temp.next;
        }
        console.log();
    }
    Count()
    {
        return this.iCount;
    }

    Peek()
    {   
        let temp = null;

        temp = this.first;

        let iValue = 0;

        if(temp == null)
        {
            console.log("Queue is empty");
            return -1;
        }    

        iValue = temp.data

        return iValue
    }
        
}

function main()
{
    let obj = new Queue();

    iRet = 0;

    obj.Enqueue(51);
    obj.Enqueue(41);
    obj.Enqueue(31);
    obj.Enqueue(21);
    obj.Enqueue(11);

    obj.Display();

    iRet = obj.Count();

    console.log("Number of nodes are: "+iRet);

    obj.Dequeue();

    obj.Display();

    iRet = obj.Count();

    console.log("Number of nodes are: "+iRet);

    iRet = obj.Peek();

    console.log("Top Node from Queue is :",iRet);

}
main();