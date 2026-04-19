class Node
{
    constructor(no)
    {
        this.data = no;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLL1
{
    constructor()
    {
        console.log("Object of DoublyLL1 gets created :");
        this.first = null;
        this.iCount = 0;
    }

    InsertFirst(no)
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
            this.first.prev = newn;

            this.first = newn;
        }

        this.iCount++;
    }
    InsertLast(no)
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
            newn.prev = temp;
        }

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

        while (temp != null) 
        {
            process.stdout.write("| " + temp.data + " |->");
            temp = temp.next;
        }
        console.log("null");
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
    let obj = new DoublyLL1();

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