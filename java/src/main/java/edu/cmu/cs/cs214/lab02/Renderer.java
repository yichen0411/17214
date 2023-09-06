package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.*;

public class Renderer{
    // public Rectangle rectangle;
    
    // Renderer(Rectangle rectangle) {
    //     this.rectangle = rectangle;
    // }

    private Shape s;

    Renderer(Shape s){
        this.s = s;
    }


    void draw() {

        double area = s.getArea();

        // assume implementation

        System.out.println("Shape printed\n" + "Its area is " + area);
    }
}
