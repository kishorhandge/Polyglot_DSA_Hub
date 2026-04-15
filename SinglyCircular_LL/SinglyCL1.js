class Node
{   
    constructor(no)
    {
        this.data = no;
        this.next = null;
    }
}

class SinglyCL
{
    constructor()
    {
        console.log("Object of singlyCL linked list gets created :")
        this.first = null;
        this.last = null;
        this.iCount = 0;
    }

    InsertFirst(no)
    {
        let newn = null;

        newn = new Node(no);

        if((this.first == null) && (this.last == null))
        {
            this.first = newn;
            this.last = newn;
        }
        else
        {
            newn.next = this.first;
            this.first = newn;
        }

        this.last.next = this.first;
        this.iCount++;
    }
    InsertLast(no)
    {
        let newn = null;
        let temp = null;

        newn = new Node(no);

        if((this.first == null) && (this.last == null))
        {
            this.first = newn;
            this.last = newn;
        }
        else
        {
            this.last.next = newn;

            this.last = newn;
        }

        this.last.next = this.first;
        this.iCount++;
    }
    DeleteFirst()
    {
        
    }

    DeleteLast()
    {

    }
    Display()
    {
        let temp = null;

        temp = this.first;

        do
        {
            process.stdout.write("| " + temp.data + " |->");
            temp = temp.next;

        }while(temp != this.last.next);

        console.log("");
    }
    Count()
    {
        return this.iCount;
    }
    InsertAtPos(no,pos)
    {

    }
    DeleteAtPos(pos)
    {

    }
}

function main()
{
    let obj = new SinglyCL();

    iRet = 0;

    obj.InsertFirst(51);
    obj.InsertFirst(41);
    obj.InsertFirst(31);
    obj.InsertFirst(21);
    obj.InsertFirst(11);

    obj.Display();

    iRet = obj.Count();

    console.log("Number of nodes are: "+iRet);

    obj.InsertLast(101);
    obj.InsertLast(111);

    obj.Display();

    iRet = obj.Count();

    console.log("Number of nodes are: "+iRet);

}
main();