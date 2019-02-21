package com.tdd.learn;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class PrimeFactorTest 
{
	PrimeFactorTest aFact;
	
	
	@BeforeEach
	void setUp() throws Exception 
	{
		aFact = new PrimeFactorTest();
	}
	List<Integer> getFactor(int number)
	{
		List<Integer> gFact=new ArrayList<Integer>();
		return gFact;
	}

	@Test
	void testGetFactors01() 
	{
		assertEquals(getFactor(1),aFact.getFactors(1));
	}
	

}
