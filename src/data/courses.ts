export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LessonMedia {
  type: 'image' | 'video';
  url: string;
  caption?: string;
  position: number; // Position in content where media should appear (line number)
  thumbnail?: string; // For videos
}

export interface Lesson {
  id: string;
  code: string;
  title: string;
  content: string;
  media?: LessonMedia[];
  quizQuestions: QuizQuestion[];
}

export interface Course {
  id: string;
  code: string;
  title: string;
  description: string;
  image?: string;
  level: '10' | '20' | '30';
  credits: number;
  lessons: Lesson[];
}

export const courses: Course[] = [
  {
    id: 'mec1010',
    code: 'MEC1010',
    title: 'Shop Safety & Procedures',
    description: 'Learn essential safety practices and procedures for working in an automotive shop environment.',
    image: 'https://images.pexels.com/photos/162539/pexels-photo-162539.jpeg?auto=compress&cs=tinysrgb&w=800',
    level: '10',
    credits: 5,
    lessons: [
      {
        id: 'mec1010-1',
        code: 'MEC1010',
        title: 'Workplace Safety Fundamentals',
        content: `# Workplace Safety Fundamentals

## Introduction
Automotive shops present unique hazards that require awareness and proper safety protocols. Understanding these fundamentals protects you, your coworkers, and your customers.

## Personal Protective Equipment (PPE)

### Eye Protection
Safety glasses with side shields are mandatory in all work areas. Face shields are required when grinding, welding, or working with chemicals.

[MEDIA:1]

**Key Points:**
- Safety glasses with side shields are mandatory
- Face shields required for grinding, welding, chemical work
- Never wear contact lenses when working with chemicals

### Hand Protection
Wear appropriate gloves for the task at hand.

[MEDIA:2]

| Glove Type | Best For |
|------------|----------|
| Nitrile gloves | Chemical handling, oil changes |
| Leather gloves | Welding, sharp metal work |
| Mechanics gloves | General repair with grip protection |

### Foot Protection
Steel-toed boots with oil-resistant soles are required. No open-toed shoes are allowed in the shop.

[MEDIA:3]

### Hearing Protection
Required when operating loud equipment. Ear plugs (NRR 20-33) or ear muffs (NRR 20-30) should be worn.

## Fire Safety

[MEDIA:4]

Fire extinguishers are your first line of defense against small fires:
- Know locations of fire extinguishers (Class B for flammable liquids)
- PASS: Pull, Aim, Squeeze, Sweep
- Never block fire exits or extinguisher access

## Chemical Handling

[MEDIA:5]

Always read Safety Data Sheets (SDS) before using any chemical. Common automotive hazards include:
- Motor oil: Skin irritant, environment hazard
- Antifreeze: Toxic if ingested
- Brake cleaner: Flammable, inhalation hazard
- Battery acid: Corrosive, causes severe burns

## Emergency Procedures

### First Aid
- Know location of first aid kit and eye wash stations
- Report all injuries, no matter how minor
- Know emergency contact numbers

### Spill Response
1. Identify the spilled material (check SDS)
2. Contain the spill if safe
3. Use appropriate absorbent materials
4. Dispose of waste properly
5. Document the incident

## Key Takeaways
- PPE is your last line of defense - always wear it
- Know your emergency procedures before starting work
- Safety is everyone's responsibility`,
        media: [
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/7789650/pexels-photo-7789650.jpeg',
            caption: 'Safety glasses with side shields protect against flying debris and chemical splashes',
            position: 1
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Different types of work gloves for various automotive tasks',
            position: 2
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/23319169/pexels-photo-23319169.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Steel-toed boots provide protection from falling objects and chemical spills',
            position: 3
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/12072478/pexels-photo-12072478.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Fire extinguisher - know how to use PASS: Pull, Aim, Squeeze, Sweep',
            position: 4
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4487359/pexels-photo-4487359.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Always consult Safety Data Sheets (SDS) before handling chemicals',
            position: 5
          }
        ],
        quizQuestions: [
          {
            id: 'q1',
            question: 'When working with brake cleaner in an enclosed space, what is the primary safety concern?',
            options: ['Skin irritation', 'Flammability and inhalation hazard', 'Environmental damage', 'Eye strain'],
            correctIndex: 1,
            explanation: 'Brake cleaner is highly flammable and the vapors can cause serious health effects when inhaled. Always ensure proper ventilation.'
          },
          {
            id: 'q2',
            question: 'What does PASS stand for in fire extinguisher operation?',
            options: ['Pull, Aim, Spray, Shut', 'Pull, Aim, Squeeze, Sweep', 'Point, Aim, Squeeze, Sweep', 'Pull, Adjust, Spray, Secure'],
            correctIndex: 1,
            explanation: 'PASS is the standard acronym for fire extinguisher operation: Pull the pin, Aim at the base of fire, Squeeze the handle, and Sweep side to side.'
          },
          {
            id: 'q3',
            question: 'Which type of gloves should be worn when performing an oil change?',
            options: ['Cotton work gloves', 'Nitrile gloves', 'Leather welding gloves', 'No gloves needed'],
            correctIndex: 1,
            explanation: 'Nitrile gloves provide the best protection against oils and chemicals while maintaining dexterity.'
          },
          {
            id: 'q4',
            question: 'What should you do FIRST when encountering a chemical spill?',
            options: ['Clean it up immediately', 'Identify the spilled material', 'Call emergency services', 'Evacuate the building'],
            correctIndex: 1,
            explanation: 'You must identify the spilled material first by checking the Safety Data Sheet (SDS).'
          },
          {
            id: 'q5',
            question: 'Why should contact lenses not be worn when working with chemicals?',
            options: ['They can fall out easily', 'Chemicals can become trapped between the lens and eye', 'They are not stylish', 'They interfere with safety glasses'],
            correctIndex: 1,
            explanation: 'Chemicals can splash into the eye and become trapped behind contact lenses, increasing exposure time and severity of injury.'
          }
        ]
      },
      {
        id: 'mec1010-2',
        code: 'MEC1010',
        title: 'Lift and Jack Safety',
        content: `# Lift and Jack Safety

## Vehicle Lifting Fundamentals
Lifting vehicles is one of the most common and potentially dangerous tasks in an automotive shop. Proper procedures prevent serious injury or death.

[MEDIA:1]

## Types of Lifting Equipment

### Hydraulic Floor Jacks
- Rated capacity must exceed vehicle weight
- Always use jack stands - NEVER work under a vehicle supported only by a jack

[MEDIA:2]

### Jack Stands
- Must be rated for the vehicle weight
- Use in pairs when possible
- Check for damage before each use

### Vehicle Lifts (Hoists)

[MEDIA:3]

Two-post lifts are the most common in automotive shops:
- Asymmetric arms for better door access
- Check OEM lift points in service manual
- Raise until tires just clear, then shake vehicle to test stability
- Use safety locks before going under vehicle

## Lift Point Identification

[MEDIA:4]

Always consult the service manual for specific lift points. Common locations include:
- Frame rails
- Pinch welds (unibody vehicles)
- Axle housing
- Factory designated lift pads

**WARNING**: Never lift from:
- Floor pans
- Oil pan
- Suspension components not designed for lifting
- Exhaust system
- Body panels

## Safe Operating Procedures

### Pre-Lift Checklist
1. Check equipment for damage or leaks
2. Verify weight capacity exceeds vehicle weight
3. Clear area of obstructions
4. Ensure floor is level and solid
5. Identify correct lift points

### Lifting Sequence
1. Position vehicle correctly
2. Align lift arms/pads with lift points
3. Raise slowly until barely contacting points
4. Rock vehicle gently to check stability
5. Raise to working height
6. Engage safety locks
7. Lower onto locks before starting work

[MEDIA:5]

### Lowering Sequence
1. Ensure no tools or equipment under vehicle
2. Clear all personnel from area
3. Raise slightly to disengage locks
4. Release locks
5. Lower slowly and smoothly
6. Verify arms/pads are clear before pulling out

## Emergency Procedures
- Know location of manual release valves
- If lift fails while raised, evacuate area immediately
- Never try to catch a falling vehicle
- Report all equipment malfunctions immediately

## Key Takeaways
- Always use jack stands with floor jacks
- Check equipment daily before use
- Know and use proper lift points
- Never work under a vehicle without safety locks engaged`,
        media: [
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/32152039/pexels-photo-32152039.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Two-post hydraulic lift in an automotive service bay',
            position: 1
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/24407415/pexels-photo-24407415.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Hydraulic floor jack - always use with jack stands for safety',
            position: 2
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/20872015/pexels-photo-20872015.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Professional vehicle lift with safety locks engaged',
            position: 3
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/37400202/pexels-photo-37400202.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Always consult service manual for proper lift point locations',
            position: 4
          },
          {
            type: 'video',
            url: 'https://www.youtube.com/watch?v=brU_rNUh6Is',
            caption: 'Watch: Proper vehicle lifting and safety procedures',
            position: 5,
            thumbnail: 'https://images.pexels.com/photos/4116169/pexels-photo-4116169.jpeg?auto=compress&cs=tinysrgb&w=800'
          }
        ],
        quizQuestions: [
          {
            id: 'q6',
            question: 'Why should you never work under a vehicle supported only by a hydraulic floor jack?',
            options: ['The jack is too short', 'Hydraulic jacks can fail, causing the vehicle to fall', 'The jack blocks access for work', 'It is against company policy only'],
            correctIndex: 1,
            explanation: 'Hydraulic jacks can fail due to seal leaks. Always support a raised vehicle with jack stands.'
          },
          {
            id: 'q7',
            question: 'What is the correct procedure after raising a vehicle on a two-post lift?',
            options: ['Immediately begin work', 'Raise to full height and walk away', 'Shake the vehicle gently and engage safety locks', 'Lower it back down to check lift points'],
            correctIndex: 2,
            explanation: 'After raising, gently shake the vehicle to verify stability, then engage the mechanical safety locks.'
          },
          {
            id: 'q8',
            question: 'Where should you look for proper lift point locations on a vehicle?',
            options: ['Where it looks strongest', 'Service manual OEM specifications', 'Previous technician marks', 'Anywhere on the frame'],
            correctIndex: 1,
            explanation: 'Always consult the service manual for OEM-specified lift points.'
          },
          {
            id: 'q9',
            question: 'When should a lift equipment inspection be performed?',
            options: ['Once per year', 'Only when it breaks', 'Daily visual inspection before use', 'Monthly'],
            correctIndex: 2,
            explanation: 'A visual inspection should be performed daily before using lift equipment.'
          },
          {
            id: 'q10',
            question: 'What should you do if a vehicle begins to fall from a lift?',
            options: ['Try to catch it', 'Run to get help', 'Evacuate the area immediately', 'Try to reposition the lift arms'],
            correctIndex: 2,
            explanation: 'Never attempt to catch a falling vehicle. Evacuate the area immediately.'
          }
        ]
      }
    ]
  },
  {
    id: 'mec1015',
    code: 'MEC1015',
    title: 'Mechanical Tools & Materials',
    description: 'Master the identification, selection, and proper use of hand tools, power tools, and shop materials.',
    image: 'https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg?auto=compress&cs=tinysrgb&w=800',
    level: '10',
    credits: 5,
    lessons: [
      {
        id: 'mec1015-1',
        code: 'MEC1015',
        title: 'Hand Tools',
        content: `# Hand Tools for Automotive Service

## Introduction
Skilled use of hand tools is the foundation of automotive service. Proper selection and use of tools increases efficiency and prevents damage to components.

[MEDIA:1]

## Wrenches

### Open-End Wrenches
U-shaped opening at each end. Different sizes at each end (e.g., 12mm/14mm). Best for quickly turning nuts in accessible areas.

### Box-End Wrenches
Closed ring with 6 or 12 points. 6-point is better for high-torque applications. Provides secure grip on all six sides of fastener.

[MEDIA:2]

### Combination Wrenches
Most versatile option - open end on one side, box end on other. Same size on both ends. Essential for any automotive shop.

### Adjustable Wrenches
Can fit various sizes of nuts/bolts. Not for high-torque applications. Keep jaws tight against fastener, pull toward adjustable jaw.

[MEDIA:3]

### Line Wrenches (Flare Nut)
For brake lines and fuel lines. Surrounds nut to prevent rounding. Opening allows sliding over line. Use on flared fittings.

## Socket Sets

### Socket Drive Sizes
| Size | Best For |
|------|----------|
| 1/4" | Small fasteners, electronics |
| 3/8" | Most common automotive size |
| 1/2" | Wheel lugs, suspension bolts |
| 3/4" | Heavy-duty applications |

[MEDIA:4]

### Socket Types
- **Standard (shallow)**: Most applications
- **Deep well**: Reach over studs or bolts
- **Impact sockets**: Black oxide finish, stronger material
- **Universal joints**: Access angled fasteners
- **Extensions**: Reach deep or recessed fasteners

## Torque Wrenches
Essential for proper fastener tightening. Types include beam, click-type, and digital.

[MEDIA:5]

**Important Tips:**
- Always return to zero after use
- Calibrate annually
- Torque sequence matters (typically inside-out or cross pattern)

## Screwdrivers

### Types
- **Flat (slotted)**: Less common on modern vehicles
- **Phillips**: Most common, sizes 1-4
- **Torx (T)**: Security fasteners, common on modern vehicles
- **Hex/Allen**: European applications, set screws

### Proper Use
Match size correctly to prevent stripping. Apply downward pressure while turning. Never use as pry bar or chisel.

## Pliers

[MEDIA:6]

Types for different applications:
- **Slip joint**: General purpose
- **Needle nose**: Reaching confined spaces
- **Locking (Vise-Grip)**: Holding parts
- **Diagonal cutters**: Cutting wire, cotter pins
- **Channellock**: Large objects, exhaust work

## Specialty Tools

### Pullers
Two-jaw and three-jaw types for removing gears, pulleys, and bearings. Use with bearing splitter for sealed bearings.

[MEDIA:7]

### Torx and Hex Sets
Common on modern vehicles. Security tamper-proof versions exist. Always use correct size to prevent damage.

## Tool Care and Maintenance
- Clean tools after each use
- Apply light oil to prevent rust
- Store properly in toolboxes
- Inspect for damage before use
- Replace worn or damaged tools immediately`,
        media: [
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/8985913/pexels-photo-8985913.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Professional mechanic tool set organized in toolbox',
            position: 1
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/5853933/pexels-photo-5853933.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Combination wrenches - open end and box end',
            position: 2
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/30413496/pexels-photo-30413496.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Adjustable wrench - useful for various fastener sizes',
            position: 3
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4480531/pexels-photo-4480531.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Socket set with various drive sizes and extensions',
            position: 4
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/6720531/pexels-photo-6720531.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Click-type torque wrench for precise fastener tightening',
            position: 5
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/37792975/pexels-photo-37792975.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Various pliers types for automotive work',
            position: 6
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/7568416/pexels-photo-7568416.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Gear puller for removing pulleys and bearings',
            position: 7
          }
        ],
        quizQuestions: [
          {
            id: 'q11',
            question: 'Why is a 6-point box-end wrench preferred over a 12-point for high-torque applications?',
            options: ['It is cheaper', 'It provides more contact area and is less likely to round the fastener', 'It fits more positions', '12-point wrenches do not exist'],
            correctIndex: 1,
            explanation: 'A 6-point wrench contacts all six sides of a hexagonal fastener, providing more surface area contact and reducing rounding of the corners.'
          },
          {
            id: 'q12',
            question: 'What type of wrench is specifically designed for brake line fittings?',
            options: ['Open-end wrench', 'Box-end wrench', 'Line wrench (flare nut wrench)', 'Adjustable wrench'],
            correctIndex: 2,
            explanation: 'Line wrenches surround the fitting completely with only a small opening for the line to pass through, preventing the soft brass fitting from rounding.'
          },
          {
            id: 'q13',
            question: 'What should you always do with a torque wrench after use?',
            options: ['Oil it', 'Return it to zero setting', 'Store it in its case', 'Loosen the handle'],
            correctIndex: 1,
            explanation: 'Always return a torque wrench to its lowest setting after use to prevent the internal spring from losing calibration.'
          },
          {
            id: 'q14',
            question: 'When using an adjustable wrench, which direction should you pull?',
            options: ['Away from the adjustable jaw', 'Toward the adjustable jaw', 'Either direction is fine', 'Perpendicular to the wrench'],
            correctIndex: 1,
            explanation: 'Pull toward the adjustable jaw to keep the movable jaw against the fastener, preventing it from spreading.'
          },
          {
            id: 'q15',
            question: 'What distinguishes an impact socket from a standard chrome socket?',
            options: ['Impact sockets are chrome plated', 'Impact sockets have a black oxide finish and are made of stronger material', 'Impact sockets are smaller', 'Standard sockets are stronger'],
            correctIndex: 1,
            explanation: 'Impact sockets have a black oxide finish and are made of tougher steel that can withstand shock forces from impact tools.'
          }
        ]
      },
      {
        id: 'mec1015-2',
        code: 'MEC1015',
        title: 'Measuring Tools',
        content: `# Measuring Tools in Automotive Service

## Introduction
Accurate measurement is critical for diagnosing wear, setting clearances, and ensuring proper assembly. Precision tools require proper technique and care.

[MEDIA:1]

## Micrometers

### Outside Micrometers
Measure external dimensions. Available in various size ranges (0-1", 1-2", etc.). Resolution typically 0.0001" (one ten-thousandth).

[MEDIA:2]

Used for measuring:
- Piston diameter
- Crankshaft journals
- Brake rotor thickness

### Reading a Micrometer
1. Read the sleeve scale (major divisions = 0.100")
2. Read the thimble scale (50 divisions x 0.001" each)
3. Add them together for total measurement
4. Some have vernier scale for 0.0001" resolution

### Proper Technique
- Hold frame by the heat shield to prevent expansion from body heat
- Use ratchet stop for consistent pressure
- Never force - will damage instrument

## Vernier Calipers

[MEDIA:3]

### Types
- **Dial calipers**: Easy to read
- **Digital calipers**: Direct reading, metric/imperial switch
- **Vernier scale**: Traditional, requires interpretation

### Measuring Capabilities
- Outside dimensions (outer jaws)
- Inside dimensions (inner jaws)
- Step measurements (front edge)
- Depth measurements (depth rod)

## Dial Indicators

[MEDIA:4]

Measure small linear distances for:
- Checking runout on rotors, shafts, wheels
- Measuring endplay in components
- Verifying assembly clearances

### Reading Dial Indicators
- One full revolution = 0.100" typically
- Face shows increments of 0.001"
- Total travel indicator shows full revolutions

## Feeler Gauges

[MEDIA:5]

Used to measure clearances between parts:
- Valve adjustment
- Spark plug gaps
- Piston ring end gap
- Bearing clearances

### Technique
- Use correct blade or combination
- Insert flat and straight
- Should have slight drag when correct size
- Clean between measurements

## Bore Gauges
Measure cylinder bore diameter and check for taper and out-of-round. Must be used with micrometer for setting.

## Telescoping Gauges
Transfer measurements from inside bores. Expand, lock, and measure with outside micrometer.

## Care and Calibration

### Storage
- Keep in protective cases
- Store micrometers at zero or slightly open
- Do not drop or bang precision tools
- Keep clean and lightly oiled

### Calibration
- Verify accuracy before critical measurements
- Use gauge blocks or calibration standards
- Professional calibration annually
- Document verification readings

### Environmental Factors
- Temperature affects measurement
- Ideal: 68F (20C)
- Allow tools and parts to stabilize
- Body heat can affect micrometer readings`,
        media: [
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/5290119/pexels-photo-5290119.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Precision measuring tools for automotive service',
            position: 1
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/36003974/pexels-photo-36003974.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Outside micrometer measuring precision component',
            position: 2
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/7180748/pexels-photo-7180748.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Digital caliper for accurate measurements',
            position: 3
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/37660313/pexels-photo-37660313.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Dial indicator measuring brake rotor runout',
            position: 4
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/7697444/pexels-photo-7697444.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Feeler gauge set for measuring gaps and clearances',
            position: 5
          }
        ],
        quizQuestions: [
          {
            id: 'q16',
            question: 'What does a resolution of 0.0001" on a micrometer mean?',
            options: ['It measures up to 0.0001 inches', 'It can distinguish measurements 0.0001 inches apart', 'It measures to the nearest thousandth', 'It has a total range of 0.0001 inches'],
            correctIndex: 1,
            explanation: 'Resolution indicates the smallest increment the measuring tool can distinguish. A 0.0001" resolution means the tool can measure differences as small as one ten-thousandth of an inch.'
          },
          {
            id: 'q17',
            question: 'Why should you hold a micrometer by its heat shield rather than the frame?',
            options: ['It looks more professional', 'Body heat can cause the frame to expand and affect accuracy', 'The heat shield is more comfortable', 'It is required by warranty'],
            correctIndex: 1,
            explanation: 'The heat shield insulates the frame from your body heat. Even small temperature changes cause metal to expand, which would give false measurements.'
          },
          {
            id: 'q18',
            question: 'When measuring cylinder bore with a bore gauge, why do you rock the gauge while taking the measurement?',
            options: ['To bore a hole', 'To find the true diameter at the narrowest point', 'To clean the cylinder', 'To release pressure'],
            correctIndex: 1,
            explanation: 'Rocking the bore gauge helps find the smallest reading, which is the true diameter perpendicular to the cylinder walls.'
          },
          {
            id: 'q19',
            question: 'How should a feeler gauge feel when inserted to measure the correct clearance?',
            options: ['Loose and easy to move', 'It should have a slight drag', 'Very tight, hard to insert', 'It should fall right through'],
            correctIndex: 1,
            explanation: 'The correct feeler gauge blade should slide with a slight drag. If it falls through easily, the clearance is larger.'
          },
          {
            id: 'q20',
            question: 'What is the proper way to use telescoping gauges?',
            options: ['Measure directly with the gauge', 'Expand in the bore, lock, and measure with an outside micrometer', 'Use like a feeler gauge', 'Set with a caliper'],
            correctIndex: 1,
            explanation: 'Telescoping gauges only transfer the measurement. You expand them in the bore, lock them, remove them, and then measure the transferred distance with an outside micrometer.'
          }
        ]
      }
    ]
  },
  {
    id: 'mec1020',
    code: 'MEC1020',
    title: 'Engine Fundamentals',
    description: 'Understand the principles of internal combustion engines, including components, operation, and basic diagnostics.',
    image: 'https://images.pexels.com/photos/162539/pexels-photo-162539.jpeg?auto=compress&cs=tinysrgb&w=800',
    level: '10',
    credits: 5,
    lessons: [
      {
        id: 'mec1020-1',
        code: 'MEC1020',
        title: 'Four-Stroke Engine Operation',
        content: `# Four-Stroke Engine Operation

## Introduction
The four-stroke internal combustion engine is the most common type in automobiles. Understanding its operation is fundamental to automotive service.

[MEDIA:1]

## The Four Strokes

### 1. Intake Stroke
**Piston moves down** from Top Dead Center (TDC) to Bottom Dead Center (BDC)

- Intake valve opens
- Exhaust valve closed
- Air-fuel mixture drawn into cylinder
- Approximately 180 degrees crankshaft rotation

[MEDIA:2]

### 2. Compression Stroke
**Piston moves up** from BDC to TDC

- Both valves closed
- Air-fuel mixture compressed
- Compression ratio typically 8:1 to 12:1
- Approximately 180 degrees crankshaft rotation

### 3. Power Stroke
**Piston forced down** from TDC to BDC

- Spark ignites mixture just before TDC
- Combustion creates high pressure (600+ psi)
- Only power-producing stroke
- Approximately 180 degrees crankshaft rotation

[MEDIA:3]

### 4. Exhaust Stroke
**Piston moves up** from BDC to TDC

- Exhaust valve opens
- Burnt gases pushed out
- Approximately 180 degrees crankshaft rotation

## Engine Timing

### Valve Timing
Valves do not open exactly at TDC/BDC. Intake valve opens before TDC (overlap) for better breathing efficiency. This varies with engine speed and design.

### Ignition Timing
- Spark occurs before TDC during compression
- Measured in degrees BTDC (Before TDC)
- Too advanced = detonation
- Too retarded = power loss, overheating

[MEDIA:4]

## Key Engine Components

### Cylinder Block
Houses cylinders and crankshaft. Made of cast iron or aluminum. Contains water jacket for cooling.

### Pistons
Converts combustion pressure to motion. Aluminum alloy construction. Rings seal against cylinder wall.

[MEDIA:5]

### Crankshaft
Converts reciprocating motion to rotating motion. Counterweights for balance. Main bearings support in block.

### Camshaft
Operates valves. Driven by crankshaft (chain, belt, or gear). One revolution per two crankshaft revolutions.

[MEDIA:6]

### Valves
- **Intake**: Larger, controls air-fuel entry
- **Exhaust**: Smaller, exits burnt gases
- Valve springs close valves
- Valve guides align movement

## Modern Engine Features
- Variable valve timing (VVT)
- Direct injection
- Turbocharging/supercharging
- Cylinder deactivation`,
        media: [
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/190539/pexels-photo-190539.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Modern four-stroke engine cutaway showing internal components',
            position: 1
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/5506047/pexels-photo-5506047.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Intake stroke - air-fuel mixture enters cylinder',
            position: 2
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/190539/pexels-photo-190539.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Power stroke - combustion forces piston down',
            position: 3
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/188777/pexels-photo-188777.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Timing components - crankshaft and camshaft relationship',
            position: 4
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/33559644/pexels-photo-33559644.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Piston and connecting rod assembly',
            position: 5
          },
          {
            type: 'video',
            url: 'https://www.youtube.com/watch?v=Pu7g3uIG6Zo',
            caption: 'Watch: Four-stroke engine animation',
            position: 6,
            thumbnail: 'https://images.pexels.com/photos/7568418/pexels-photo-7568418.jpeg?auto=compress&cs=tinysrgb&w=400'
          }
        ],
        quizQuestions: [
          {
            id: 'q21',
            question: 'During which stroke do both valves remain closed in a four-stroke engine?',
            options: ['Intake', 'Exhaust', 'Compression and Power', 'All four strokes'],
            correctIndex: 2,
            explanation: 'Both valves are closed during the compression and power strokes to seal the combustion chamber.'
          },
          {
            id: 'q22',
            question: 'What is the compression ratio of an engine?',
            options: ['The ratio of power strokes to intake strokes', 'The ratio of cylinder volume at BDC to volume at TDC', 'The ratio of fuel to air', 'The ratio of exhaust to intake duration'],
            correctIndex: 1,
            explanation: 'Compression ratio compares the cylinder volume at BDC (largest) to TDC (smallest).'
          },
          {
            id: 'q23',
            question: 'Why does the intake valve open slightly before the piston reaches TDC on the exhaust stroke?',
            options: ['To let air in early', 'To create valve overlap for better cylinder filling', 'Because the camshaft is loose', 'To cool the exhaust valve'],
            correctIndex: 1,
            explanation: 'Valve overlap allows the exiting exhaust gases to help draw in fresh intake mixture, improving cylinder filling.'
          },
          {
            id: 'q24',
            question: 'Which component converts the reciprocating (up-down) motion of the pistons into rotating motion?',
            options: ['Camshaft', 'Crankshaft', 'Timing belt', 'Flywheel'],
            correctIndex: 1,
            explanation: 'The crankshaft converts linear piston motion into rotary motion through offset crank pins.'
          },
          {
            id: 'q25',
            question: 'What happens if ignition timing is too advanced (spark occurs too early)?',
            options: ['Better fuel economy', 'Engine runs cooler', 'Detonation/engine knock', 'More power output'],
            correctIndex: 2,
            explanation: 'Advanced timing causes the spark to ignite the mixture while the piston is still rising, causing detonation (knock).'
          }
        ]
      }
    ]
  },
  {
    id: 'mec1030',
    code: 'MEC1030',
    title: 'Lubrication & Cooling Systems',
    description: 'Learn about engine lubrication systems and cooling system components, operation, and maintenance.',
    image: 'https://images.pexels.com/photos/162539/pexels-photo-162539.jpeg?auto=compress&cs=tinysrgb&w=800',
    level: '10',
    credits: 5,
    lessons: [
      {
        id: 'mec1030-1',
        code: 'MEC1030',
        title: 'Engine Lubrication System',
        content: `# Engine Lubrication System

## Purpose of Lubrication
Engine oil serves multiple critical functions:
- Reduces friction between moving parts
- Cools by carrying heat away from hot areas
- Seals piston rings against cylinder walls
- Cleans by suspending contaminants
- Protects against corrosion

[MEDIA:1]

## System Components

### Oil Pan (Sump)
Reservoir for engine oil. Typically holds 4-8 quarts. Contains drain plug and may have windage tray.

### Oil Pump
Creates oil pressure. Usually gear or rotor type. Pressures: 10-60 psi typical.

[MEDIA:2]

### Oil Filter
Removes particles 10-40 microns. Full-flow design with bypass valve. Contains anti-drainback valve. Change with every oil change.

[MEDIA:3]

## Oil Viscosity

### SAE Viscosity Ratings
- **Single-grade**: SAE 30, 40
- **Multi-grade**: 5W-30, 10W-30, 10W-40
  - W = Winter rating
  - First number = cold viscosity
  - Second number = hot viscosity

[MEDIA:4]

## Oil Types

### Conventional Mineral Oil
Refined from crude oil. Lower cost. Adequate for many applications.

### Synthetic Oil
Chemically engineered molecules. Better temperature performance. Longer change intervals. Higher cost.

## Maintenance

### Oil Change Procedure

[MEDIA:5]

1. Run engine to warm oil
2. Raise vehicle safely on lift
3. Position drain pan
4. Remove drain plug, drain oil
5. Replace drain plug with new washer
6. Remove old filter, install new
7. Lower vehicle, add new oil
8. Run engine, check for leaks
9. Recheck oil level

### Oil Change Intervals
- Conventional: 3,000-5,000 miles
- Synthetic: 7,500-15,000 miles
- Follow manufacturer recommendations`,
        media: [
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/13065691/pexels-photo-13065691.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Engine oil - the lifeblood of your engine',
            position: 1
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226902/pexels-photo-4226902.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Oil pump assembly from engine',
            position: 2
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226903/pexels-photo-4226903.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Oil filter - change with every oil change',
            position: 3
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226904/pexels-photo-4226904.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Various oil grades and viscosities',
            position: 4
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226905/pexels-photo-4226905.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Performing an oil change service',
            position: 5
          }
        ],
        quizQuestions: [
          {
            id: 'q26',
            question: 'What is the primary function of engine oil beyond lubrication?',
            options: ['It is the main fuel', 'It cools, cleans, seals, and protects the engine', 'It provides hydraulic power', 'It powers the ignition system'],
            correctIndex: 1,
            explanation: 'Engine oil also cools by carrying away heat, cleans by suspending particles, seals gaps like piston rings, and protects against corrosion.'
          },
          {
            id: 'q27',
            question: 'What happens if an oil filter becomes completely clogged?',
            options: ['The engine stops immediately', 'Oil bypasses the filter via a bypass valve', 'The oil pump fails', 'Pressure increases dramatically'],
            correctIndex: 1,
            explanation: 'Oil filters have a bypass valve that opens when the filter becomes restricted to prevent oil starvation.'
          },
          {
            id: 'q28',
            question: 'In a multi-grade oil like 10W-30, what does the 30 represent?',
            options: ['The oil weight at freezing temperature', 'The oil viscosity at operating temperature (100C)', 'The number of additives', 'The oil grade at startup'],
            correctIndex: 1,
            explanation: 'The second number represents the viscosity grade at operating temperature (100C).'
          },
          {
            id: 'q29',
            question: 'Why is it important to lubricate the gasket on a new oil filter with oil before installation?',
            options: ['To make it easier to remove next time', 'To ensure a proper seal and prevent leaks', 'To increase the cost of service', 'It is not necessary'],
            correctIndex: 1,
            explanation: 'Oiling the filter gasket ensures it seats properly and creates a leak-free seal.'
          },
          {
            id: 'q30',
            question: 'How does the oil pump create oil pressure?',
            options: ['By heating the oil', 'By pushing oil through small passages (resistance to flow)', 'By using electricity', 'By creating a vacuum'],
            correctIndex: 1,
            explanation: 'The oil pump creates pressure by forcing oil through the small passages of the engine. The resistance to flow creates pressure.'
          }
        ]
      },
      {
        id: 'mec1030-2',
        code: 'MEC1030',
        title: 'Cooling System Operation',
        content: `# Cooling System Operation

## Purpose of the Cooling System
Maintains optimal engine temperature:
- Prevents overheating and damage
- Allows engine to reach operating temperature quickly
- Maintains consistent temperature for efficiency
- Provides heat for passenger compartment

[MEDIA:1]

## System Components

### Radiator
Heat exchanger between coolant and air. Tubes with fins increase surface area. Aluminum construction is common.

### Water Pump
Circulates coolant through system. Centrifugal impeller design. Belt-driven from crankshaft or electric.

[MEDIA:2]

### Thermostat
Temperature-controlled valve. Opens at specified temperature (180F-210F). Blocks flow to radiator until warm.

### Radiator Cap
Pressurizes system (13-16 psi typical). Increases coolant boiling point. **Never open when hot!**

[MEDIA:3]

### Coolant (Antifreeze)
- Ethylene glycol base (toxic) or propylene glycol (less toxic)
- Lowers freezing point (-34F at 50/50 mix)
- Raises boiling point (+3F for each psi)
- Contains corrosion inhibitors

## Coolant Flow

[MEDIA:4]

### Cold Engine (Thermostat Closed)
1. Pump pushes coolant to block
2. Circulates through block and head
3. May return via bypass
4. Warms up quickly

### Warm Engine (Thermostat Open)
1. Coolant flows through block
2. Into cylinder head(s)
3. Through thermostat to radiator
4. Cooled in radiator
5. Returned to pump

## Common Problems

[MEDIA:5]

- **Leaks**: Hoses, radiator, water pump, gaskets
- **Thermostat failure**: Stuck open (runs cold) or closed (overheats)
- **Water pump failure**: Noise, leak from weep hole
- **Head gasket**: Combustion gases in coolant

## Maintenance
- Check coolant level regularly
- Flush and refill per schedule (2-5 years)
- Use correct coolant type
- Verify proper concentration`,
        media: [
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226906/pexels-photo-4226906.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Automotive radiator - the main heat exchanger',
            position: 1
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226907/pexels-photo-4226907.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Water pump - circulates coolant through the system',
            position: 2
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226908/pexels-photo-4226908.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Radiator cap - never open when hot!',
            position: 3
          },
          {
            type: 'video',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            caption: 'Watch: Cooling system operation explained',
            position: 4,
            thumbnail: 'https://images.pexels.com/photos/4226906/pexels-photo-4226906.jpeg?auto=compress&cs=tinysrgb&w=400'
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226909/pexels-photo-4226909.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Checking coolant level and condition',
            position: 5
          }
        ],
        quizQuestions: [
          {
            id: 'q31',
            question: 'Why is it dangerous to remove a radiator cap when the engine is hot?',
            options: ['The cap is hard to turn when hot', 'The system is pressurized and hot coolant can spray out, causing burns', 'The coolant will lose its properties', 'Air will enter the system'],
            correctIndex: 1,
            explanation: 'A hot cooling system is under pressure (13-16 psi). Removing the cap releases this pressure suddenly, causing the superheated coolant to boil and spray out violently.'
          },
          {
            id: 'q32',
            question: 'What is the primary function of the thermostat in the cooling system?',
            options: ['To increase engine speed', 'To regulate coolant flow and maintain optimal engine temperature', 'To cool the coolant', 'To pump water'],
            correctIndex: 1,
            explanation: 'The thermostat blocks coolant flow to the radiator until the engine reaches operating temperature, then opens to allow cooling.'
          },
          {
            id: 'q33',
            question: 'Why does a 50/50 mix of antifreeze and water provide better protection than pure antifreeze?',
            options: ['It is cheaper', 'Water has better heat transfer, and the mix provides optimal freeze/boil protection', 'Pure antifreeze is illegal', 'Water is easier to find'],
            correctIndex: 1,
            explanation: 'While antifreeze provides freeze and corrosion protection, water has superior heat transfer properties. The 50/50 mix provides optimal balance.'
          },
          {
            id: 'q34',
            question: 'What would be a symptom of a thermostat stuck closed?',
            options: ['Engine runs too cold', 'Engine overheats', 'Coolant leaks externally', 'Heater works too well'],
            correctIndex: 1,
            explanation: 'A thermostat stuck closed prevents coolant from flowing to the radiator, causing the engine to overheat rapidly.'
          },
          {
            id: 'q35',
            question: 'What is the purpose of the weep hole on a water pump?',
            options: ['To add oil to the pump', 'To indicate seal failure when coolant leaks from it', 'To let air into the system', 'To adjust pump speed'],
            correctIndex: 1,
            explanation: 'The weep hole allows coolant that leaks past the seal to exit before it reaches the bearing. Coolant dripping from the weep hole indicates the pump seal is failing.'
          }
        ]
      }
    ]
  },
  {
    id: 'mec1110',
    code: 'MEC1110',
    title: 'Vehicle Service & Preventive Maintenance',
    description: 'Develop skills in performing routine vehicle maintenance and inspection procedures.',
    image: 'https://images.pexels.com/photos/3807993/pexels-photo-3807993.jpeg?auto=compress&cs=tinysrgb&w=800',
    level: '10',
    credits: 5,
    lessons: [
      {
        id: 'mec1110-1',
        code: 'MEC1110',
        title: 'Preventive Maintenance Services',
        content: `# Preventive Maintenance Services

## Importance of Preventive Maintenance
Preventive maintenance extends vehicle life, improves safety, prevents costly repairs, and maintains warranty coverage.

[MEDIA:1]

## Oil Change Service
Most fundamental maintenance service.

### Service Procedure
1. Verify correct oil type and quantity
2. Warm engine to operating temperature
3. Raise vehicle on lift
4. Inspect undercarriage while raised
5. Position drain pan
6. Remove drain plug, drain oil
7. Replace drain plug with new washer
8. Remove old filter, install new
9. Lower vehicle, add new oil
10. Run engine, check for leaks

[MEDIA:2]

## Tire Rotation

### Purpose
Equalize wear across all tires, extend tire life, and identify developing problems.

### Rotation Patterns
- **Forward cross**: Front-wheel drive
- **X-pattern**: All-wheel or 4-wheel drive
- **Rearward cross**: Rear-wheel drive

[MEDIA:3]

### Torque Specifications
- Passenger cars: 80-100 ft-lbs
- Light trucks: 100-150 ft-lbs
- Always use manufacturer specs
- Retorque after 50-100 miles

## Brake Inspection

[MEDIA:4]

### Visual Checks
- Pad thickness (minimum 2-3mm)
- Rotor condition (scoring, thickness)
- Caliper operation
- Lines and hoses
- Fluid level and condition

### Brake Fluid
Hygroscopic (absorbs moisture). Flush every 2-3 years. DOT 3, 4, or 5.1 are common.

## Fluid Level Checks

[MEDIA:5]

### Under Hood Checks
- Engine oil level and condition
- Coolant level in reservoir
- Brake fluid level
- Power steering fluid
- Washer fluid

## Air Filter Service
Inspect every 15,000 miles. Replace every 30,000-45,000 miles. More often in dusty conditions.

## Multi-Point Inspection
- Belts and hoses
- Battery condition
- Exhaust system
- Steering and suspension
- Tire condition and pressure
- Wiper blades
- Lights operation`,
        media: [
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/3807993/pexels-photo-3807993.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Professional automotive service bay',
            position: 1
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226910/pexels-photo-4226910.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Draining engine oil during service',
            position: 2
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226911/pexels-photo-4226911.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Tire rotation extends tire life',
            position: 3
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226912/pexels-photo-4226912.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Brake pad inspection - check thickness',
            position: 4
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226913/pexels-photo-4226913.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Checking fluid levels under the hood',
            position: 5
          }
        ],
        quizQuestions: [
          {
            id: 'q36',
            question: 'Why is it important to warm the engine before draining the oil?',
            options: ['To check the temperature gauge', 'Warm oil flows more freely and carries contaminants with it', 'Cold oil is better for the engine', 'It is not necessary'],
            correctIndex: 1,
            explanation: 'Warm oil flows more freely and helps suspend and carry away contaminants like sludge and particles.'
          },
          {
            id: 'q37',
            question: 'Why should wheel lug nuts be torqued in a star pattern?',
            options: ['It looks professional', 'To seat the wheel evenly and prevent warping brake rotors', 'To make the pattern visible', 'It is the only way the wrench fits'],
            correctIndex: 1,
            explanation: 'Torquing in a star pattern ensures even pressure distribution across the wheel hub.'
          },
          {
            id: 'q38',
            question: 'What does low brake fluid level in the reservoir potentially indicate besides a system leak?',
            options: ['The system is overfilled', 'Brake pads may be worn', 'The fluid is old', 'Wrong fluid type was used'],
            correctIndex: 1,
            explanation: 'As brake pads wear, caliper pistons extend further, requiring more fluid volume. Low fluid often indicates worn brake pads.'
          },
          {
            id: 'q39',
            question: 'Why is brake fluid flushed periodically when it is in a sealed system?',
            options: ['To change the color', 'Brake fluid absorbs moisture which can cause corrosion and reduce boiling point', 'The system is not actually sealed', 'To reduce cost'],
            correctIndex: 1,
            explanation: 'Brake fluid is hygroscopic, absorbing moisture that can cause internal corrosion and lower the boiling point.'
          },
          {
            id: 'q40',
            question: 'When performing a multi-point inspection, why inspect the air filter even if it looks clean?',
            options: ['To charge for a replacement', 'Small debris and dust may be trapped internally, and rodent damage can occur', 'It is company policy', 'The filter is always dirty'],
            correctIndex: 1,
            explanation: 'Even a filter that appears clean may have dust trapped deep in the pleats or may have been damaged by rodents.'
          }
        ]
      }
    ]
  },
  {
    id: 'mec2010',
    code: 'MEC2010',
    title: 'Braking Systems',
    description: 'Comprehensive study of hydraulic brake systems, components, diagnosis, and repair procedures.',
    image: 'https://images.pexels.com/photos/4226912/pexels-photo-4226912.jpeg?auto=compress&cs=tinysrgb&w=800',
    level: '20',
    credits: 5,
    lessons: [
      {
        id: 'mec2010-1',
        code: 'MEC2010',
        title: 'Hydraulic Brake System Fundamentals',
        content: `# Hydraulic Brake System Fundamentals

## Introduction
Brakes convert kinetic energy (motion) into heat energy through friction. This is essential knowledge for any automotive technician.

[MEDIA:1]

## System Principles

### Hydraulic Principles
Pascal's Law states that pressure applied to confined fluid transmits equally throughout. Force multiplication occurs through piston size difference.

- Master cylinder: small piston, high pressure
- Caliper/wheel cylinder: larger pistons, higher force
- Typical system pressure: 800-2000 psi

[MEDIA:2]

## System Components

### Master Cylinder
Converts pedal force to hydraulic pressure. Primary and secondary pistons (dual system). Fluid reservoir attached.

### Brake Lines and Hoses
Steel lines for durability, rubber hoses at wheels for flexibility. Proportioning valve limits rear brake pressure.

[MEDIA:3]

### Brake Calipers

#### Floating Caliper
Slides on guide pins. Single or dual piston on inside only. Must keep slide pins lubricated.

#### Fixed Caliper
Mounted rigidly. Pistons on both sides. High performance applications.

### Brake Pads
Friction material on backing plate. Types: organic, semi-metallic, ceramic. Wear indicator (squealer) when worn.

[MEDIA:4]

### Rotors (Discs)
Cast iron friction surface. Vented or solid design. Must maintain minimum thickness.

## Power Assist

### Vacuum Booster
Uses engine vacuum for assist. Diaphragm and check valve design. Manual braking if engine stops.

[MEDIA:5]

## System Diagnosis

### Common Problems
- Spongy pedal: air in system
- Low pedal: fluid leak, worn pads
- Pulling: caliper stuck, contamination
- Noise: glazed pads, worn hardware
- Pulsation: warped rotor

### Inspection Points
- Fluid level and condition
- Line and hose condition
- Pad/shoe thickness
- Rotor/drum condition
- Caliper operation`,
        media: [
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226914/pexels-photo-4226914.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Complete disc brake assembly',
            position: 1
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226915/pexels-photo-4226915.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Brake master cylinder and fluid reservoir',
            position: 2
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226916/pexels-photo-4226916.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Brake lines and ABS module',
            position: 3
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226917/pexels-photo-4226917.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Brake pads - check for wear and glazing',
            position: 4
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226918/pexels-photo-4226918.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Brake booster and master cylinder assembly',
            position: 5
          }
        ],
        quizQuestions: [
          {
            id: 'q41',
            question: 'How does a hydraulic brake system multiply the force from your foot on the brake pedal?',
            options: ['By using a vacuum booster', 'Through the difference in piston area between the master cylinder and caliper pistons', 'By heating the fluid', 'Through electric motors'],
            correctIndex: 1,
            explanation: 'A small master cylinder piston creates high pressure that acts on larger caliper pistons, multiplying force proportionally to the area difference.'
          },
          {
            id: 'q42',
            question: 'What is the purpose of a proportioning valve in the brake system?',
            options: ['To increase brake pressure', 'To limit pressure to rear wheels and prevent lockup', 'To equalize pressure front and rear', 'To reduce brake noise'],
            correctIndex: 1,
            explanation: 'The proportioning valve limits brake pressure to the rear wheels to prevent lockup during hard braking.'
          },
          {
            id: 'q43',
            question: 'Why must slide pins be lubricated on a floating caliper?',
            options: ['To reduce noise only', 'So the caliper can move to apply both pads and retract fully', 'For cosmetic reasons', 'The pins do not need lubrication'],
            correctIndex: 1,
            explanation: 'Floating calipers must move laterally on their slide pins to apply both pads with equal force.'
          },
          {
            id: 'q44',
            question: 'What indicates that brake fluid has absorbed too much moisture?',
            options: ['It turns black', 'The boiling point drops and copper content increases', 'It smells like gasoline', 'The level decreases rapidly'],
            correctIndex: 1,
            explanation: 'Test strips can detect copper ions stripped from brake lines by corrosive fluid. A lowered boiling point can cause brake fade.'
          },
          {
            id: 'q45',
            question: 'Why do the front brakes typically provide 60-70% of stopping power?',
            options: ['The front rotors are larger', 'Weight transfers forward during braking, loading the front wheels', 'The rear brakes are not connected', 'To improve fuel economy'],
            correctIndex: 1,
            explanation: 'During braking, inertia causes weight to transfer forward, loading the front wheels. More traction at front allows more braking force.'
          }
        ]
      }
    ]
  },
  {
    id: 'mec2020',
    code: 'MEC2020',
    title: 'Steering & Suspension Systems',
    description: 'Study of steering and suspension components, geometry, diagnosis, and repair procedures.',
    image: 'https://images.pexels.com/photos/163735/pexels-photo-163735.jpeg?auto=compress&cs=tinysrgb&w=800',
    level: '20',
    credits: 5,
    lessons: [
      {
        id: 'mec2020-1',
        code: 'MEC2020',
        title: 'Steering System Components',
        content: `# Steering System Components

## Introduction
The steering system allows the driver to control vehicle direction. Modern systems provide precise control with minimal effort.

[MEDIA:1]

## Steering System Types

### Rack and Pinion
Most common on modern vehicles. Pinion gear on steering shaft meshes with rack that moves left/right. Tie rods connect to wheels.

[MEDIA:2]

**Advantages:**
- Compact, precise, responsive
- Direct mechanical connection
- Fewer components

### Recirculating Ball
Traditional trucks and large vehicles. Worm gear and sector shaft design. Ball bearings reduce friction.

## Power Steering

### Hydraulic Power Steering
Pump driven by engine belt creates pressure for assist. Control valve in rack or box directs fluid.

[MEDIA:3]

### Electric Power Steering (EPS)
Electric motor provides assist. Variable assist based on speed. More assist at low speeds for easier parking.

## Steering Linkage

### Tie Rods
Connect rack to steering arms. Inner and outer tie rods with ball socket ends. Adjustable for toe alignment.

[MEDIA:4]

## Common Problems

### Steering Play
- Worn tie rod ends
- Worn rack bushings
- Loose adjusting plug

### Hard Steering
- Low power steering fluid
- Failed pump
- Belt slipping

### Steering Noise
- Pump whine: low fluid/air
- Clunking: worn joints
- Squealing: belt

## Diagnosis

### Visual Inspection
- Check fluid level and condition
- Inspect all boots for damage
- Look for leaks
- Check belt condition

### Steering Play Check
Wheels straight, engine off. Check for excessive movement. Should be minimal (less than 1 inch).

[MEDIA:5]`,
        media: [
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226919/pexels-photo-4226919.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Modern rack and pinion steering system',
            position: 1
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226920/pexels-photo-4226920.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Rack and pinion steering gear cutaway',
            position: 2
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226921/pexels-photo-4226921.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Power steering pump and reservoir',
            position: 3
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226922/pexels-photo-4226922.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Tie rod end - check for play and wear',
            position: 4
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226923/pexels-photo-4226923.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Steering system inspection points',
            position: 5
          }
        ],
        quizQuestions: [
          {
            id: 'q46',
            question: 'What is the main advantage of rack and pinion steering over recirculating ball?',
            options: ['It is cheaper', 'More precise and direct steering response', 'Lasts longer', 'Requires less maintenance'],
            correctIndex: 1,
            explanation: 'Rack and pinion steering provides more precise, direct steering response because there are fewer mechanical connections.'
          },
          {
            id: 'q47',
            question: 'Why is it important to center the steering gear before connecting the linkage?',
            options: ['It is easier to work on', 'The steering wheel must be centered and the system designed for equal travel left and right', 'To prevent airbag deployment', 'For alignment purposes only'],
            correctIndex: 1,
            explanation: 'The steering gear has equal travel in both directions. If not centered, the steering wheel might not be centered, or turn travel might be limited.'
          },
          {
            id: 'q48',
            question: 'What is a likely cause of steering effort being different left vs right?',
            options: ['Low tire pressure', 'Rack internal valve issue or binding component', 'Worn tires', 'Normal condition'],
            correctIndex: 1,
            explanation: 'Steering effort should be equal in both directions. Unequal effort can indicate an internal rack valve problem or binding component.'
          },
          {
            id: 'q49',
            question: 'What does the clockspring in a steering column do?',
            options: ['Winds up for return-to-center', 'Allows electrical connection for airbag and controls while steering turns', 'Controls the turn signal', 'Tilts the steering column'],
            correctIndex: 1,
            explanation: 'The clockspring is a spiral-wound ribbon cable that maintains electrical connection for airbag and controls while the steering wheel turns.'
          },
          {
            id: 'q50',
            question: 'Why does electric power steering provide more assist at low speeds?',
            options: ['It is easier to program', 'For easier parking with less steering effort when you need it most', 'Because the motor works harder', 'To reduce tire wear'],
            correctIndex: 1,
            explanation: 'EPS provides maximum assist at low speeds where steering effort is highest (parking), and reduces assist at high speeds for better road feel.'
          }
        ]
      }
    ]
  },
  {
    id: 'mec2030',
    code: 'MEC2030',
    title: 'Automotive Electrical Systems',
    description: 'Understanding of automotive electrical fundamentals, circuits, and electronic systems.',
    image: 'https://images.pexels.com/photos/162535/pexels-photo-162535.jpeg?auto=compress&cs=tinysrgb&w=800',
    level: '20',
    credits: 5,
    lessons: [
      {
        id: 'mec2030-1',
        code: 'MEC2030',
        title: 'Electrical Fundamentals',
        content: `# Automotive Electrical Fundamentals

## Basic Electrical Theory

### Ohm's Law
The fundamental relationship in electricity:

**V = I x R**

- V = Voltage (volts)
- I = Current (amperes)
- R = Resistance (ohms)

[MEDIA:1]

### Power Formula
**P = V x I** (Power in watts)

## Electrical Components

### Battery
Stores electrical energy chemically. 12.6V fully charged (lead-acid). Provides starting power.

[MEDIA:2]

### Alternator
Generates AC, rectified to DC. Provides power when engine running. Output rated in amperes (60-200A typical).

### Starter Motor
Converts electricity to mechanical rotation. High current draw (150-400A). Cranks engine for starting.

## Circuit Types

### Series Circuit
Components in a single path. Same current through all. If one fails, all fail.

[MEDIA:3]

### Parallel Circuit
Multiple paths for current. Same voltage across all components. If one fails, others continue.

## Circuit Protection

### Fuses
Current-sensitive devices. Rated in amperes. Open when current exceeds rating. **Never bypass a fuse!**

[MEDIA:4]

### Fuse Types
- **Blade fuses**: Most common (ATC, ATO, Mini)
- **Glass fuses**: Older vehicles
- **Circuit breakers**: Resettable

## Wiring

### Wire Gauge (AWG)
Smaller number = larger wire. Thicker wire = less resistance. Length affects voltage drop.

## Diagnosis

### Voltage Drop
Measure voltage while circuit operates. High drop = high resistance. Should be near zero across good connection.

### Current Draw (Parasitic Draw)
Normal: Less than 50mA. High draw = dead battery.

[MEDIA:5]`,
        media: [
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226924/pexels-photo-4226924.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: "Ohm's Law triangle - fundamental electrical relationship",
            position: 1
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226925/pexels-photo-4226925.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Automotive battery - 12V lead-acid type',
            position: 2
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226926/pexels-photo-4226926.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Series circuit diagram - single path for current',
            position: 3
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226927/pexels-photo-4226927.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Automotive fuse box - various fuse types',
            position: 4
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226928/pexels-photo-4226928.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Using multimeter for electrical diagnostics',
            position: 5
          }
        ],
        quizQuestions: [
          {
            id: 'q51',
            question: "Using Ohm's Law, how much current flows through a 6-ohm resistor with 12V applied?",
            options: ['72 amps', '2 amps', '0.5 amps', '6 amps'],
            correctIndex: 1,
            explanation: "Using Ohm's Law (I = V/R): Current = 12V / 6 ohms = 2 amps."
          },
          {
            id: 'q52',
            question: 'What happens to other components in a parallel circuit if one component fails open?',
            options: ['All other components stop working', 'Other components continue to function normally', 'The voltage increases', 'The current stops completely'],
            correctIndex: 1,
            explanation: 'In a parallel circuit, each component has its own path. If one path opens, current continues through the other paths.'
          },
          {
            id: 'q53',
            question: 'Why should a blown fuse never be replaced with one of a higher amperage rating?',
            options: ['It costs more', 'The circuit is unprotected and wiring can overheat', 'It will void the warranty', 'The fuse will not fit'],
            correctIndex: 1,
            explanation: 'Fuses are sized to protect wiring. Using a higher-rated fuse allows more current than wiring can handle, causing overheating and fire risk.'
          },
          {
            id: 'q54',
            question: 'What does a high voltage drop across a connection indicate?',
            options: ['Good connection', 'High resistance causing power loss', 'Low current', 'Proper grounding'],
            correctIndex: 1,
            explanation: 'A good connection should have nearly zero voltage drop. A high voltage drop indicates resistance at the connection.'
          },
          {
            id: 'q55',
            question: 'What is a typical acceptable parasitic draw on a modern vehicle battery?',
            options: ['5 amps', 'Less than 50 milliamps', '500 milliamps', '2 amps'],
            correctIndex: 1,
            explanation: 'Modern vehicles draw small amounts of power continuously. A draw under 50mA is normal. Higher draws indicate a problem.'
          }
        ]
      }
    ]
  },
  {
    id: 'mec2040',
    code: 'MEC2040',
    title: 'Vehicle Safety Systems',
    description: 'Study of passive and active safety systems including airbags, seatbelts, and advanced driver assistance.',
    image: 'https://images.pexels.com/photos/4226929/pexels-photo-4226929.jpeg?auto=compress&cs=tinysrgb&w=800',
    level: '20',
    credits: 5,
    lessons: [
      {
        id: 'mec2040-1',
        code: 'MEC2040',
        title: 'Restraint Systems',
        content: `# Restraint Systems

## Introduction
Restraint systems protect occupants during a collision. Modern vehicles combine multiple systems for comprehensive protection.

[MEDIA:1]

## Seat Belts

### Components
- **Latch plate**: Metal tongue that inserts into buckle
- **Buckle**: Receives latch plate
- **Webbing**: Strong nylon material
- **Retractor**: Spools webbing, locks in collision
- **Pretensioner**: Pulls belt tight at impact

[MEDIA:2]

## Airbag Systems

### Components
- Impact sensors (front, side, rollover)
- Control module (SRS computer)
- Clockspring (electrical connection to steering wheel)
- Inflator module (propellant)
- Airbag cushion (nylon fabric)

### Deployment Sequence
1. Impact detected by sensors
2. Control module verifies true collision
3. Signal sent to inflator
4. Propellant ignites
5. Bag inflates in 30-50 milliseconds
6. Passenger contacts bag
7. Gas vents, bag deflates

[MEDIA:3]

### Airbag Types
- **Frontal**: Driver (steering wheel), Passenger (dashboard)
- **Side**: In seat backs or doors
- **Curtain**: Roof rail mounted (rollover protection)
- **Knee**: Below steering column

## Safety Precautions

**WARNING: Airbag Safety**
- Never work on airbag system with battery connected
- Wait 10+ minutes after battery disconnect
- Store airbags face up, away from heat
- Never use multimeter on airbag connectors
- Follow OEM procedures exactly

[MEDIA:4]

## Service Procedures

### Airbag Module Replacement
1. Disconnect battery negative
2. Wait specified time (10+ minutes)
3. Remove covers, access module
4. Disconnect connectors carefully
5. Install new module
6. Clear codes after reconnecting

### Clockspring Service
- Center wheels before removal
- Mark position
- Do not rotate without limit stops

## Post-Collision Inspection

### Must Replace After Deployment
- All deployed airbags
- Deployed pretensioners
- Clockspring
- Control module (sometimes)

[MEDIA:5]`,
        media: [
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226929/pexels-photo-4226929.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Seat belt pretensioner and retractor mechanism',
            position: 1
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226930/pexels-photo-4226930.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Three-point seatbelt system components',
            position: 2
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226931/pexels-photo-4226931.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Airbag deployment sequence timing',
            position: 3
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226932/pexels-photo-4226932.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'SRS airbag warning light and module',
            position: 4
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226933/pexels-photo-4226933.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Steering wheel airbag module',
            position: 5
          }
        ],
        quizQuestions: [
          {
            id: 'q56',
            question: 'Why must you wait at least 10 minutes after disconnecting the battery before working on airbag systems?',
            options: ['The battery needs to cool', 'The airbag system capacitor stores power that could fire the airbag', 'It is a manufacturer warranty requirement', 'To allow the car to settle'],
            correctIndex: 1,
            explanation: 'The airbag control module has a capacitor that stores enough energy to deploy airbags even with the battery disconnected.'
          },
          {
            id: 'q57',
            question: 'What is the purpose of the pretensioner in a seatbelt system?',
            options: ['To make the belt more comfortable', 'To pull the belt tight and remove slack during a collision', 'To release the belt after impact', 'To warn the driver'],
            correctIndex: 1,
            explanation: 'The pretensioner fires immediately upon impact detection, tightening the seatbelt to hold the occupant firmly.'
          },
          {
            id: 'q58',
            question: 'What must happen before installing a new clockspring?',
            options: ['Clean the mounting surface', 'Center the steering wheels and keep the clockspring centered', 'Disconnect the airbag', 'Remove the battery'],
            correctIndex: 1,
            explanation: 'The clockspring must be centered before installation. Otherwise, it could break when steering.'
          },
          {
            id: 'q59',
            question: 'Why should airbags be stored face-up when removed from the vehicle?',
            options: ['It is easier to see the part number', 'If deployed accidentally, it will inflate upward away from the surface', 'To protect the wiring', 'It is required for warranty return'],
            correctIndex: 1,
            explanation: 'If an airbag were to accidentally deploy while stored, having it face-up allows the bag to inflate upward into open air.'
          },
          {
            id: 'q60',
            question: 'What component(s) must typically be replaced after an airbag deployment?',
            options: ['Just the deployed airbags', 'Deployed airbags, pretensioners, clockspring, and possibly the control module', 'Only the control module', 'Nothing if they pass inspection'],
            correctIndex: 1,
            explanation: 'After deployment, most manufacturers recommend replacing deployed airbags, pretensioners, clockspring, and possibly the control module.'
          }
        ]
      }
    ]
  },
  {
    id: 'mec2050',
    code: 'MEC2050',
    title: 'Engine Diagnosis & Tune-Up',
    description: 'Advanced engine diagnostic techniques and tune-up procedures for optimal performance.',
    image: 'https://images.pexels.com/photos/4226934/pexels-photo-4226934.jpeg?auto=compress&cs=tinysrgb&w=800',
    level: '20',
    credits: 5,
    lessons: [
      {
        id: 'mec2050-1',
        code: 'MEC2050',
        title: 'Engine Diagnostic Procedures',
        content: `# Engine Diagnostic Procedures

## Diagnostic Approach

### Scientific Method
1. **Verify** the customer concern
2. **Gather** information (history, conditions)
3. **Isolate** the problem area
4. **Test** suspect components
5. **Repair** the root cause
6. **Verify** the repair

[MEDIA:1]

## Preliminary Checks

### Visual Inspection
- Fluid levels and condition
- Obvious damage or leaks
- Belt and hose condition
- Wiring and connections
- Vacuum lines

## On-Board Diagnostics (OBD)

### OBD-II System
Standard since 1996. Universal diagnostic connector (DLC). Standardized codes (P, C, B, U).

[MEDIA:2]

### Diagnostic Trouble Codes (DTCs)
- P0xxx: SAE standardized
- P1xxx: Manufacturer specific

## Ignition System Diagnosis

### Symptoms
- Misfire (P0300-P030x codes)
- Rough idle
- Lack of power
- Hard starting

[MEDIA:3]

### Spark Plug Reading
| Condition | Appearance |
|-----------|------------|
| Normal | Light tan/gray deposit |
| Rich | Black sooty deposit |
| Oil fouled | Wet black oily deposit |
| Lean | White/blistered electrodes |

## Fuel System Diagnosis

### Pressure Testing
- Connect gauge to fuel rail
- Check key-on pressure
- Check running pressure
- Compare to specifications

[MEDIA:4]

## Compression Testing

### Static Compression Test
1. Disable ignition and fuel
2. Remove all spark plugs
3. Insert compression gauge
4. Crank engine 4-5 revolutions
5. Record each cylinder

### Results Interpretation
- Good: 125-175 psi (varies)
- One low: Concentrated problem
- Adjacent low: Head gasket

## Common Diagnostic Scenarios

### Misfire Diagnosis
1. Retrieve codes, note cylinder(s)
2. Swap components to see if misfire moves
3. Check compression
4. Check fuel injector

[MEDIA:5]`,
        media: [
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226934/pexels-photo-4226934.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'OBD-II scan tool reading diagnostic codes',
            position: 1
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226935/pexels-photo-4226935.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'OBD-II diagnostic connector location',
            position: 2
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226936/pexels-photo-4226936.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Spark plug condition reading chart',
            position: 3
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226937/pexels-photo-4226937.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Fuel pressure gauge installation',
            position: 4
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226938/pexels-photo-4226938.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Compression tester on engine',
            position: 5
          }
        ],
        quizQuestions: [
          {
            id: 'q61',
            question: 'What is the first step in any diagnostic process?',
            options: ['Replace parts', 'Verify the customer concern', 'Clear codes and test drive', 'Check for recalls'],
            correctIndex: 1,
            explanation: 'Before any diagnostic work, you must verify the customers concern to ensure you understand the problem.'
          },
          {
            id: 'q62',
            question: 'What does a compression test that shows one cylinder significantly lower than the others indicate?',
            options: ['Normal wear throughout the engine', 'A specific problem with just that cylinder', 'A fuel system problem', 'An ignition system problem'],
            correctIndex: 1,
            explanation: 'One low cylinder indicates a localized problem with that cylinder, such as a burnt valve or broken ring.'
          },
          {
            id: 'q63',
            question: 'When performing a spark plug swap test for misfire diagnosis, what are you trying to determine?',
            options: ['If the spark plug looks good', 'If the misfire follows the component (indicating a bad component)', 'If the spark plug is the correct heat range', 'The combustion temperature'],
            correctIndex: 1,
            explanation: 'Swapping components helps determine if the misfire follows the component (its bad) or stays in the original cylinder (base engine issue).'
          },
          {
            id: 'q64',
            question: 'What does a fuel pressure gauge that drops quickly after the engine is turned off indicate?',
            options: ['Normal operation', 'A leak in the fuel system', 'The pump is running', 'The gauge is broken'],
            correctIndex: 1,
            explanation: 'A rapid pressure drop indicates fuel is leaking somewhere - could be the check valve, a leaking injector, or faulty regulator.'
          },
          {
            id: 'q65',
            question: 'What does high HC (hydrocarbon) readings in exhaust analysis typically indicate?',
            options: ['A rich mixture', 'Unburned fuel from misfire or incomplete combustion', 'Normal combustion', 'High combustion temperatures'],
            correctIndex: 1,
            explanation: 'HC (hydrocarbons) represent unburned fuel in the exhaust, indicating fuel is not being fully combusted.'
          }
        ]
      }
    ]
  },
  {
    id: 'mec3010',
    code: 'MEC3010',
    title: 'Computerized Vehicle Systems',
    description: 'Advanced study of onboard computers, networks, and electronic control systems.',
    image: 'https://images.pexels.com/photos/4226939/pexels-photo-4226939.jpeg?auto=compress&cs=tinysrgb&w=800',
    level: '30',
    credits: 5,
    lessons: [
      {
        id: 'mec3010-1',
        code: 'MEC3010',
        title: 'Vehicle Networks and Communication',
        content: `# Vehicle Networks and Communication

## Introduction
Modern vehicles use complex computer networks. Understanding network architecture is essential for advanced diagnostics.

[MEDIA:1]

## Control Modules

### Types of Modules
- **PCM/ECM**: Powertrain/Engine Control Module
- **TCM**: Transmission Control Module
- **BCM**: Body Control Module
- **ABS/ESP**: Antilock Brake/Stability Control
- **SRS**: Airbag/Restraint System
- **TPMS**: Tire Pressure Monitoring
- **HVAC**: Climate Control

## Network Communication

### CAN Bus (Controller Area Network)

[MEDIA:2]

#### High-Speed CAN (CAN-C)
- 500 kbps typical
- Real-time data
- Engine, transmission, ABS
- Twisted pair wires (CAN-H, CAN-L)

#### Low-Speed CAN (CAN-B)
- 83.3-125 kbps
- Body control functions
- More fault tolerant

### LIN Bus (Local Interconnect Network)
Slower single-wire network. Master-slave configuration. For less critical systems (locks, mirrors, wipers).

[MEDIA:3]

## Gateway Module
Translates between networks. Allows data sharing between different-speed buses. May be integrated into BCM.

## Network Diagnostics

### U-Codes
Network communication codes:
- **U0001**: CAN Bus off
- **U0100**: Lost communication with ECM/PCM
- **U0101**: Lost communication with TCM

[MEDIA:4]

### Physical Testing

#### Voltage Testing
- CAN-H: ~2.5V at rest, 3.5V dominant
- CAN-L: ~2.5V at rest, 1.5V dominant
- Termination resistors: 60 ohms across pair

### Common Problems
- Bent pins in connectors
- Corroded connections
- Broken wires
- Failed module

[MEDIA:5]`,
        media: [
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226939/pexels-photo-4226939.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Engine control module (ECM/PCM)',
            position: 1
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226940/pexels-photo-4226940.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'CAN bus network topology diagram',
            position: 2
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226941/pexels-photo-4226941.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'LIN bus communication wiring',
            position: 3
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226942/pexels-photo-4226942.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Oscilloscope CAN bus waveform',
            position: 4
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226943/pexels-photo-4226943.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Module network connector inspection',
            position: 5
          }
        ],
        quizQuestions: [
          {
            id: 'q66',
            question: 'What is the purpose of twisted pair wires in a CAN bus network?',
            options: ['To make the wire longer', 'To reduce electrical interference and noise', 'Because two are stronger', 'For redundancy'],
            correctIndex: 1,
            explanation: 'Twisted pair wiring reduces electromagnetic interference because external noise affects both wires equally, which cancels out.'
          },
          {
            id: 'q67',
            question: 'What does a U code prefix indicate in diagnostic trouble codes?',
            options: ['Engine codes', 'Network communication codes', 'Body codes', 'Chassis codes'],
            correctIndex: 1,
            explanation: 'U-codes are network communication codes indicating problems with communication between modules.'
          },
          {
            id: 'q68',
            question: 'What resistance should be measured across the CAN bus wires?',
            options: ['0 ohms', '60 ohms (two 120-ohm resistors in parallel)', '120 ohms', 'Infinite'],
            correctIndex: 1,
            explanation: 'CAN networks use 120-ohm termination resistors at each end. In parallel, they measure 60 ohms.'
          },
          {
            id: 'q69',
            question: 'Why does high-speed CAN handle real-time data like engine and ABS?',
            options: ['High-speed is cheaper', 'High-speed CAN provides faster data rates needed for critical real-time systems', 'Body controls are more important', 'Low-speed is not reliable'],
            correctIndex: 1,
            explanation: 'High-speed CAN (500 kbps) transmits data quickly enough for real-time engine and brake control.'
          },
          {
            id: 'q70',
            question: 'What is the function of a gateway module in a vehicle network?',
            options: ['To provide WiFi', 'To translate and route data between different network speeds and protocols', 'To control power', 'To store diagnostic codes'],
            correctIndex: 1,
            explanation: 'The gateway module connects different networks, translating and routing messages between them.'
          }
        ]
      }
    ]
  },
  {
    id: 'mec3020',
    code: 'MEC3020',
    title: 'Drivetrain Systems',
    description: 'Comprehensive study of drivetrain components including clutches, driveshafts, and differentials.',
    image: 'https://images.pexels.com/photos/4226944/pexels-photo-4226944.jpeg?auto=compress&cs=tinysrgb&w=800',
    level: '30',
    credits: 5,
    lessons: [
      {
        id: 'mec3020-1',
        code: 'MEC3020',
        title: 'Driveline Components',
        content: `# Driveline Components

## Introduction
The driveline transfers power from the transmission to the drive wheels.

[MEDIA:1]

## Clutch System

### Manual Transmission Clutch Components
- **Disc (friction disc)**: Clamped between flywheel and pressure plate
- **Pressure plate**: Applies clamping force
- **Release bearing**: Depresses pressure plate fingers
- **Flywheel**: Provides friction surface

[MEDIA:2]

### Clutch Diagnosis

#### Slippage
Engine revs without vehicle acceleration. Caused by worn friction material or oil contamination.

#### No Release
Pedal to floor, cannot shift. Caused by air in hydraulic system or failed slave/master cylinder.

## Driveshaft

### U-Joints (Universal Joints)
Cross-and-roller design allows driveline angle changes. Must be greased (some are sealed). Phasing is important.

[MEDIA:3]

### CV Joint (Constant Velocity)
More complex design maintains constant velocity through angle. Inner joint plunges for suspension movement. Outer joint turns at sharp angles. Boot protects joint and grease.

## Differential

### Purpose
Allows wheels to rotate at different speeds. Transfers power 90 degrees. Provides gear reduction (final drive ratio).

[MEDIA:4]

### Components
- Ring gear and pinion gear
- Carrier and spider gears
- Side gears connected to axle shafts

### Limited Slip Differentials
Prevents one-wheel peel. Types: Clutch, cone, geared (Torsen). Requires special fluid (friction modifier).

## Axle Shafts

### Front Wheel Drive
Half shafts with CV joints. Inner plunge joint, outer fixed joint.

[MEDIA:5]`,
        media: [
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226944/pexels-photo-4226944.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Complete drivetrain assembly',
            position: 1
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226945/pexels-photo-4226945.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Clutch disc and pressure plate assembly',
            position: 2
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226946/pexels-photo-4226946.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'CV axle shaft with inner and outer joints',
            position: 3
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226947/pexels-photo-4226947.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Differential cutaway showing internal gears',
            position: 4
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226948/pexels-photo-4226948.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Front wheel drive axle assembly',
            position: 5
          }
        ],
        quizQuestions: [
          {
            id: 'q71',
            question: 'When a clutch slips, what typically happens?',
            options: ['The vehicle moves faster', 'The engine revs but the vehicle does not accelerate proportionally', 'The transmission locks up', 'The vehicle stalls'],
            correctIndex: 1,
            explanation: 'When a clutch slips, the engine can rev but power is not transferred to the transmission - acceleration does not match.'
          },
          {
            id: 'q72',
            question: 'What is the purpose of the boot on a CV joint?',
            options: ['To make it look nice', 'To retain grease and keep contaminants out', 'To absorb vibration', 'To reduce noise'],
            correctIndex: 1,
            explanation: 'The CV boot seals in lubricating grease and prevents water, dirt, and debris from entering the joint.'
          },
          {
            id: 'q73',
            question: 'Why do differential gears emit noise that changes while turning a corner?',
            options: ['It is a normal characteristic', 'Worn spider or side gears which are under load differently when turning', 'The ring gear is failing', 'Low oil level'],
            correctIndex: 1,
            explanation: 'When turning, spider gears rotate to allow speed difference. Worn gears make noise during turns when under load.'
          },
          {
            id: 'q74',
            question: 'What final drive ratio would provide better acceleration but lower top speed and fuel economy?',
            options: ['3.08:1', '4.10:1', '2.73:1', '1.00:1'],
            correctIndex: 1,
            explanation: 'A higher numerical ratio provides more torque multiplication at the wheels, improving acceleration, but reduces fuel economy.'
          },
          {
            id: 'q75',
            question: 'What symptom would indicate a worn U-joint on a driveshaft?',
            options: ['Smooth quiet operation', 'Vibration and clunking, especially on acceleration/deceleration', 'Better fuel economy', 'Increased top speed'],
            correctIndex: 1,
            explanation: 'Worn U-joints develop play that causes clunking when torque changes and vibration that gets worse with speed.'
          }
        ]
      }
    ]
  },
  {
    id: 'mec3030',
    code: 'MEC3030',
    title: 'Manual & Automatic Transmissions',
    description: 'In-depth study of transmission operation, diagnosis, and repair procedures.',
    image: 'https://images.pexels.com/photos/4226949/pexels-photo-4226949.jpeg?auto=compress&cs=tinysrgb&w=800',
    level: '30',
    credits: 5,
    lessons: [
      {
        id: 'mec3030-1',
        code: 'MEC3030',
        title: 'Automatic Transmission Operation',
        content: `# Automatic Transmission Operation

## Introduction
Automatic transmissions use planetary gear sets and hydraulic control for seamless gear changes.

[MEDIA:1]

## Basic Components

### Torque Converter
- **Impeller (pump)**: Attached to engine
- **Turbine**: Attached to transmission input
- **Stator**: Redirects fluid flow
- Multiplies torque up to 2-3x at stall
- Lock-up clutch for direct drive

[MEDIA:2]

### Planetary Gear Set
- **Sun gear**: Center
- **Planet gears**: Orbit sun gear
- **Planet carrier**: Holds planet gears
- **Ring gear**: Outer gear

Holding one member creates gear reduction or overdrive. Two members locked = direct drive.

### Hydraulic System
- Transmission pump provides pressure
- Valve body is control center
- Shift valves control gear changes

[MEDIA:3]

## Computer Control

### Inputs
- Turbine speed (input)
- Output speed
- Throttle position
- Transmission temperature

### Outputs
- Shift solenoids (on/off)
- Pressure control solenoids (PWM)
- TCC (torque converter clutch) solenoid

## Transmission Diagnosis

### Fluid Check
- Level: hot and idling in Park
- Color: bright red = good
- Odor: burnt = overheated

[MEDIA:4]

### Common Problems
- Harsh shifts: pressure too high
- Soft/slipping: low fluid, worn clutches
- No movement: pump failure, filter clogged
- Delayed engagement: low fluid, seal leakage

[MEDIA:5]`,
        media: [
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226949/pexels-photo-4226949.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Automatic transmission cutaway',
            position: 1
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226950/pexels-photo-4226950.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Torque converter components',
            position: 2
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226951/pexels-photo-4226951.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Planetary gear set operation',
            position: 3
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226952/pexels-photo-4226952.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Checking transmission fluid level and condition',
            position: 4
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226953/pexels-photo-4226953.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Transmission valve body',
            position: 5
          }
        ],
        quizQuestions: [
          {
            id: 'q76',
            question: 'What is the purpose of the stator in a torque converter?',
            options: ['To hold fluid', 'To redirect fluid flow and multiply torque', 'To connect to the engine', 'To lock the transmission'],
            correctIndex: 1,
            explanation: 'The stator redirects fluid returning from the turbine back to the impeller, multiplying torque up to 2-3 times at stall.'
          },
          {
            id: 'q77',
            question: 'Why must the transmission be in Park or Neutral when checking transmission fluid level?',
            options: ['It is tradition', 'The pump only runs in those ranges, and oil fills the torque converter properly', 'The dipstick is only accessible then', 'To prevent engine damage'],
            correctIndex: 1,
            explanation: 'In Park or Neutral, the pump circulates fluid and fills the converter properly for an accurate reading.'
          },
          {
            id: 'q78',
            question: 'What causes a transmission to have delayed engagement when placed in Drive or Reverse?',
            options: ['Normal operation', 'Low fluid, seal leakage, or hydraulic issues causing slow clutch fill', 'Engine running too fast', 'Tires are flat'],
            correctIndex: 1,
            explanation: 'Delayed engagement occurs when hydraulic circuits are slow to fill and apply clutches.'
          },
          {
            id: 'q79',
            question: 'What does the torque converter clutch (TCC) do when it engages?',
            options: ['Disconnects the engine', 'Locks the impeller and turbine together for direct drive', 'Increases torque multiplication', 'Applies the transmission brakes'],
            correctIndex: 1,
            explanation: 'The TCC directly connects the impeller to turbine, eliminating slip, improving fuel economy.'
          },
          {
            id: 'q80',
            question: 'What does finding metal particles on the transmission pan magnet indicate?',
            options: ['Normal wear', 'Steel component wear (gears, shafts) - should be investigated', 'Glued parts', 'Aluminum wear'],
            correctIndex: 1,
            explanation: 'The magnet collects ferrous particles. Large particles indicate wear of steel components.'
          }
        ]
      }
    ]
  },
  {
    id: 'mec3040',
    code: 'MEC3040',
    title: 'Wheel Alignment & Suspension Geometry',
    description: 'Advanced study of wheel alignment angles, suspension geometry, and precision alignment procedures.',
    image: 'https://images.pexels.com/photos/4226954/pexels-photo-4226954.jpeg?auto=compress&cs=tinysrgb&w=800',
    level: '30',
    credits: 5,
    lessons: [
      {
        id: 'mec3040-1',
        code: 'MEC3040',
        title: 'Alignment Angles and Effects',
        content: `# Alignment Angles and Effects

## Introduction
Wheel alignment affects tire wear, handling, fuel economy, and driver comfort.

[MEDIA:1]

## Primary Alignment Angles

### Caster
Forward/rearward tilt of steering axis viewed from side.

- Positive: Steering axis tilts toward rear
- Provides self-centering, straight-line stability
- Typical: +3 to +7 degrees

[MEDIA:2]

### Camber
Inward/outward tilt of wheel at top viewed from front.

- Positive: Top tilted outward
- Negative: Top tilted inward
- Affects tire wear directly

### Toe
Inward/outward direction of wheels viewed from above.

- Toe-in: Front of wheels closer
- Toe-out: Front farther apart
- Most sensitive for tire wear

[MEDIA:3]

## Secondary Angles

### Steering Axis Inclination (SAI)
Angle of steering pivot from front. Non-adjustable. Works with caster for return.

### Thrust Angle
Direction rear wheels point vs centerline. Should be zero. Dog-tracking if off.

## Effects on Vehicle Behavior

### Pull
- Unequal caster: Pulls to lower side
- Unequal camber: Pulls to positive side

[MEDIA:4]

### Steering Wheel Off-Center
Toe not equal side-to-side. Must center steering wheel before setting toe.

## Pre-Alignment Inspection
**Never align worn suspension!**

Check:
- Ball joints
- Tie rod ends
- Control arm bushings
- Wheel bearings

[MEDIA:5]`,
        media: [
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226954/pexels-photo-4226954.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Computerized wheel alignment machine',
            position: 1
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226955/pexels-photo-4226955.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Caster angle illustration',
            position: 2
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226956/pexels-photo-4226956.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Camber and toe angle diagram',
            position: 3
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226957/pexels-photo-4226957.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Vehicle pulling due to alignment issue',
            position: 4
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226958/pexels-photo-4226958.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Checking ball joints before alignment',
            position: 5
          }
        ],
        quizQuestions: [
          {
            id: 'q81',
            question: 'What alignment angle is most responsible for straight-line stability and steering return?',
            options: ['Camber', 'Caster', 'Toe', 'SAI'],
            correctIndex: 1,
            explanation: 'Caster creates a trailing effect that causes the steering to self-center, providing straight-line stability.'
          },
          {
            id: 'q82',
            question: 'If a vehicle has excessive positive camber on the left front wheel, what symptom is likely?',
            options: ['Pull to the right', 'Pull to the left and wear on the outer edge of that tire', 'Vehicle drifts', 'Steering wheel vibration'],
            correctIndex: 1,
            explanation: 'A wheel with positive camber will cause the vehicle to pull to that side and wear on the outer edge.'
          },
          {
            id: 'q83',
            question: 'Which alignment angle causes the most rapid tire wear if out of specification?',
            options: ['Caster', 'Camber', 'Toe', 'Thrust angle'],
            correctIndex: 2,
            explanation: 'Toe angle causes the most rapid tire wear because the tire is being dragged sideways while rolling.'
          },
          {
            id: 'q84',
            question: 'Why must suspension components be inspected before performing an alignment?',
            options: ['To charge for more work', 'Worn components make alignment readings meaningless', 'It is required by law', 'To set the equipment'],
            correctIndex: 1,
            explanation: 'If components are worn, alignment readings can appear correct but will change under driving conditions.'
          },
          {
            id: 'q85',
            question: 'What does thrust angle measure?',
            options: ['How hard the engine pushes', 'The direction the rear wheels point compared to the vehicle centerline', 'The rear camber', 'The steering wheel position'],
            correctIndex: 1,
            explanation: 'Thrust angle is the direction the rear wheels point compared to the vehicle centerline. If not zero, the vehicle will dog-track.'
          }
        ]
      }
    ]
  },
  {
    id: 'mec3050',
    code: 'MEC3050',
    title: 'Hybrid & Electric Vehicle Technologies',
    description: 'Study of hybrid and electric vehicle systems, including high-voltage safety and component diagnosis.',
    image: 'https://images.pexels.com/photos/4226959/pexels-photo-4226959.jpeg?auto=compress&cs=tinysrgb&w=800',
    level: '30',
    credits: 5,
    lessons: [
      {
        id: 'mec3050-1',
        code: 'MEC3050',
        title: 'Hybrid and EV Systems Overview',
        content: `# Hybrid and EV Systems Overview

## Vehicle Types

### Hybrid Electric Vehicle (HEV)
Combines internal combustion and electric motor. Regenerative braking captures energy. Self-charging.

[MEDIA:1]

### Plug-In Hybrid (PHEV)
Larger battery pack. Extended electric-only range (20-50 miles). Can be plugged in for charging.

### Battery Electric Vehicle (BEV)
No internal combustion engine. Only electric motor(s). Must be plugged in.

## High-Voltage Safety

**WARNING: High-voltage systems can KILL**

### Voltage Levels
- Mild hybrid: 48V
- Full hybrid: 200-300V
- Electric vehicles: 300-800V

[MEDIA:2]

### Safety Procedures

#### Before Service
1. Remove key/power off vehicle
2. Wait specified time for capacitor discharge
3. Verify system is de-energized
4. Follow OEM procedures exactly
5. Use insulated tools

#### Required PPE
- Class 0-4 rubber insulating gloves
- Leather protectors over rubber
- Face shield with arc flash rating
- Insulated hand tools

[MEDIA:3]

### Orange Wiring
All high-voltage wiring is orange. Never cut or modify. Maintain routing away from sharp edges.

## Major Components

### High-Voltage Battery Pack
Lithium-ion most common. Battery Management System (BMS) monitors cells.

[MEDIA:4]

### Electric Motor/Generator
Provides propulsion and regeneration. Three-phase AC typically.

### Inverter/Converter
DC to AC conversion for motor. AC to DC for regeneration.

### DC-DC Converter
Steps down high voltage to 12V for conventional systems. Replaces alternator function.

## Regenerative Braking
Motor acts as generator. Captures kinetic energy. Stores in battery.

[MEDIA:5]`,
        media: [
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226959/pexels-photo-4226959.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Hybrid vehicle powertrain components',
            position: 1
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226960/pexels-photo-4226960.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'High-voltage battery pack assembly',
            position: 2
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226961/pexels-photo-4226961.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'High-voltage safety gloves and PPE',
            position: 3
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226962/pexels-photo-4226962.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Orange high-voltage cables in EV',
            position: 4
          },
          {
            type: 'image',
            url: 'https://images.pexels.com/photos/4226963/pexels-photo-4226963.jpeg?auto=compress&cs=tinysrgb&w=800',
            caption: 'Regenerative braking system diagram',
            position: 5
          }
        ],
        quizQuestions: [
          {
            id: 'q86',
            question: 'Why are special insulating gloves required when working on hybrid and electric vehicle high-voltage systems?',
            options: ['To keep hands clean', 'High-voltage systems can deliver lethal shocks', 'They look professional', 'To improve grip on tools'],
            correctIndex: 1,
            explanation: 'EV and hybrid high-voltage systems operate at 200-800 volts, which can deliver lethal shocks.'
          },
          {
            id: 'q87',
            question: 'What is the purpose of the battery management system (BMS)?',
            options: ['To play music', 'To monitor and control the battery pack including cell balancing and state of charge', 'To power the radio', 'To start the engine'],
            correctIndex: 1,
            explanation: 'The BMS monitors cell voltages, temperature, and state of charge, ensuring safe battery operation.'
          },
          {
            id: 'q88',
            question: 'What is regenerative braking?',
            options: ['Using the exhaust to stop', 'The electric motor acts as a generator to capture kinetic energy and charge the battery', 'Extra brake pads', 'Anti-lock braking'],
            correctIndex: 1,
            explanation: 'During deceleration, the motor switches to generator mode, converting kinetic energy to electrical energy.'
          },
          {
            id: 'q89',
            question: 'Why do hybrid and electric vehicles still have a 12V battery?',
            options: ['It is required by law', 'The high-voltage system is isolated, and a 12V system powers conventional accessories', 'It starts the engine', 'For backup only'],
            correctIndex: 1,
            explanation: 'The 12V system powers standard automotive electronics and enables the high-voltage contactors.'
          },
          {
            id: 'q90',
            question: 'What does the DC-DC converter in a hybrid/EV do?',
            options: ['Converts gasoline to electricity', 'Steps down high-voltage DC to 12V DC for conventional systems', 'Converts AC to DC for the motor', 'Increases voltage for charging'],
            correctIndex: 1,
            explanation: 'The DC-DC converter steps down high-voltage to 12V to power conventional systems, replacing the alternator function.'
          }
        ]
      }
    ]
  }
];

export function getCourseById(id: string): Course | undefined {
  return courses.find(c => c.id === id);
}

export function getLessonById(lessonId: string): { lesson: Lesson; course: Course } | undefined {
  for (const course of courses) {
    const lesson = course.lessons.find(l => l.id === lessonId);
    if (lesson) {
      return { lesson, course };
    }
  }
  return undefined;
}

export function getCoursesByLevel(level: '10' | '20' | '30'): Course[] {
  return courses.filter(c => c.level === level);
}

export function getCourseProgress(courseId: string, completedLessons: string[]): { completed: number; total: number; percentage: number } {
  const course = getCourseById(courseId);
  if (!course) return { completed: 0, total: 0, percentage: 0 };

  const total = course.lessons.length;
  const completed = course.lessons.filter(l => completedLessons.includes(l.id)).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return { completed, total, percentage };
}

export function getTotalProgress(completedLessons: string[]): { completed: number; total: number; percentage: number } {
  let total = 0;
  let completed = 0;

  for (const course of courses) {
    total += course.lessons.length;
    completed += course.lessons.filter(l => completedLessons.includes(l.id)).length;
  }

  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  return { completed, total, percentage };
}
